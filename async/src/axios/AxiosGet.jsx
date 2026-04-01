import axios from "axios"
import { useEffect, useState } from "react"


const AxiosGet = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2>할 일 관리</h2>
            <ul>
                {data.map(todo =>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
        
}
export default AxiosGet