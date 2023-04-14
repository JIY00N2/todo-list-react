import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
// 어플리케이션에서 사용되는 필터 값들
const filters = ['all', 'active', 'completed'];

export default function App() {
  // 컴포넌트에 현재 선택된 필터는 첫번째로 all을 보여줌
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      {/* onFilterChange={filter => setFilter(filter)} 
      전달하는 인자값과 호출하는 것이 같아 함수의 참조값만 전달해도됨*/}
      {/* Header에게 모든 필터의 정보, 현재 선택된 필터의 정보, 필터를 변경했을때 호출할 수 있는 함수*/}
      <Header filters ={filters} filter={filter} onFilterChange={setFilter}></Header>
      {/* TodoList에게도 필터에 대한 정보 제공, 현재는 all로 전부 보여줘 */}
      <TodoList filter={filter}></TodoList>
    </DarkModeProvider>
  );
}

