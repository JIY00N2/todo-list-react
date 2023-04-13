import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // 공백을 입력했을때는 추가되지 않도록 함
        if(text.trim().length === 0){
            return;
        }
        onAdd({id: uuidv4(), text, status:'active'});
        setText(''); // 추가하고 input 초기화
    }
    return (
        // onSubmit - An Event handler function. Fires when a form gets submitted.
        <form onSubmit = {handleSubmit}>
            <input 
            type='text' 
            placeholder='Add Todo' 
            value = {text} 
            onChange = {handleChange}>
            </input>
            <button>Add</button>
        </form>
    );
}

