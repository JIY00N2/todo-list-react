import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        // darkMode가 설정되면 html 태그에 darkMode라는 클래스 지정
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
}
// useDarkMode 훅을 이용
export const useDarkMode = () => useContext(DarkModeContext);