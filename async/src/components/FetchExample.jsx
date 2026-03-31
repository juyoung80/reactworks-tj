import { useEffect, useState } from "react"

const FetchExample = () => {

    const [data, setData] = useState([]);


    //컴포넌트가 마운트 될때 한 번만 실행(랜더링)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json()) //json > js 객체로 변환
        .then((result) => {
            setData(result);
            console.log(result); //객체로 출력
        })
        .catch((error) => console.error(error));
    }, [])

    return (
        <div>
            <h2>할일(To-Do) 데이터</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchExample