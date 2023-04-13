import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
// TodoList에 필터를 받아옴
export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        {id: '123', text:'장보기', status:'active'},
        {id: '124', text:'책읽기', status:'active'},
    ]);
    const handleAdd = (todo) => {
        // 새로운 todo를 todos에 업데이트 해야 함
        // setTodos를 돌면서 뒤에 todo추가
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        /* map 사용
        update되면 updated된 todo객체를 받아와 todo의 배열을 새롭게 만들면서
        하나씩 낱개로 가지고 올건데 기존의 todo id가 update하려고 하는 id와 동일하다면
        update된걸로 바꾸고 아니면 기존의 배열 item사용*/ 
        setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
    }
    const handleDelte = (deleted) => { 
        /*filter 사용
        삭제된 todo를 받아옴
        todos를 돌면서 todo의 id가 삭제하고자 하는 아이템이 아닌것만 필터링*/
        setTodos(todos.filter(todo => todo.idx !== deleted.id));
    }
    /* 필터된 아이템만 받아옴
    기존 todo와 해당하는 filter getFilteredItems 함수에 전달*/
    const filtered = getFilteredItems(todos, filter);

    return (
        <section>
            <ul>
                {/* 필터링된 아이들만 map */}
                {filtered.map(item => (
                <Todo 
                key = {item.id} 
                todo={item} 
                onUpdate={handleUpdate} 
                onDelete={handleDelte}>
                </Todo>
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}></AddTodo>
        </section>
    );
}
/* getFilteredItems(todos, filter) 현재 todo배열과
어떤걸 filter할 것인지 데이터를 받아옴*/
function getFilteredItems(todos, filter){
    // filter의 정보가 all이라면 별도로 filter하지 않아도됨
    if(filter === 'all'){
        return todos;
    }
    /*filter가 all이 아닌 경우
    todos의 status가 filter와 같은것만 받아옴*/
    return todos.filter(todo => todo.status === filter);
}