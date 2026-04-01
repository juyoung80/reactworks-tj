import axios from "axios";
import { useState } from "react"

const AxiosPost = () => {

    //할일 제목을 저장하는 상태
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    //폼제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            id:1,
            title: title,
            completed: false,
        })
        .then(res => {
            console.log("생성된 데이터:", res.data);
            alert("등록완료");
            setTitle("");
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>할 일 관리</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={title}
                onChange={handleChange}
                placeholder="할 일을 입력하세요"
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default AxiosPost