import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        // darkMode가 설정되면 html 태그에 darkMode라는 클래스 지정
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };
    // provider가 처음에 mount되었을때 한번 실행
    useEffect(() =>{
        // 다크 모드 인지 아닌지 확인, tailwind 참조
        const isDark = 
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    },[])
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}
// html 태그에 darkMode라는 클래스 생성 및 삭제 함수
function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme ='dark';
    }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme ='light';
    }
}
// useDarkMode 훅을 이용
export const useDarkMode = () => useContext(DarkModeContext);