
import { createContext, useState } from "react"
import ChildTheme from "./ChildTheme";

// context 생성
export const ThmemeContext = createContext("light");

const ParentTheme = () => {
    const [currentTheme, setCurrentTheme] = useState("light")

    const toggleTheme = () => {
        setCurrentTheme(prevTheme => (
            prevTheme === 'light' ? 'dark' : 'light'
        ))
    }

    const parentStyle = {
        background: currentTheme === 'dark' ? '#333' : '#fff',
        color: currentTheme === 'dark' ? '#fff' : '#333',
        padding:'20px'
    }

    return(
        <div style={parentStyle}>
            <h2>현재 테마 : {currentTheme}</h2>
            <ThmemeContext.Provider value={{currentTheme, toggleTheme}}>
                <ChildTheme />
            </ThmemeContext.Provider>
        </div>
    )
}

export default ParentTheme