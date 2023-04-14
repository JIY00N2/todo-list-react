import React from 'react';
import styles from './Header.module.css';
// si : style import
// cn: className import

// App에서 filters, filter, onFilterChange 전달받음
export default function Header({filters, filter, onFilterChange}) {
    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {/* filters를 돌면서 고정된 ui로 index를 써도 무난,
                li의 key를 index로 지정,
                filter의 버튼을 누르니까 button 태그 이용,
                button text는 value 이용,
                버튼이 클릭될때, 우리가 선택한 버튼의 value로 설정*/}
                {filters.map((value,index)=>(
                <li key={index}>
                    <button
                    // className 조합하기 -> ``이용
                    // 현재 전달받은 필터와 내 버튼의 값이 동일하다면 styles.selected도 사용
                    className={`${styles.filter} ${filter===value && styles.selected}`}
                    onClick={()=>onFilterChange(value)}>{value}</button>
                </li>))}
            </ul>
        </header>
    );
}

