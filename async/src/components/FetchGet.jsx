import { useEffect, useState } from "react"

function FetchGet() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("/json/users.json")
            .then(response => response.json())//json -> js 객체로 변환
            .then(data => {
                console.log("데이터 가져오기 성공", data);
                setUsers(data);
            })
            .catch(error => console.error("오류:", error));
    }, [])

    return(
        <div>
            <h2>회원 목록</h2>
             {/* <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        이름: {user.name}, 주소: {user.address.city}, 이메일: {user.email}
                    </li>
                ))}
            </ul>*/}
            
            <table className="tb_fetch">
                <thead>
                    <th>이름</th>
                    <th>주소</th>
                    <th>이메일</th>
                </thead>
                {users.map((user) => (
                <tbody key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.address.city}</td>
                    <td>{user.email}</td>
                </tbody>  
                ))}              
            </table>
           
        </div>
    )
}

export default FetchGet