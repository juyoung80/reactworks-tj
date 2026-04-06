import { useContext } from "react"
import { ThmemeContext } from "./ParentTheme"

const ChildTheme = () => {

    const { currentTheme, toggleTheme} = useContext(ThmemeContext);
    console.log("현재 테마 :", currentTheme);

    const childStyle = {
        background: currentTheme === 'dark' ? '#555' : '#f0f0f0',
        color: currentTheme === 'dark' ? '#fff' : '#333',
        padding: '15px'
    }

    return (
        <div style={childStyle}>
            <h2>Child 컴퍼넌트</h2>
            <p>현재 테마 : {currentTheme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}

export default ChildTheme