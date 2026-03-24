const Example1 = () => {

    // const names = ["홍길동", "이순신"]
    const users = [
        {id:1, name:"홍길동"},
        {id:2, name:"이순신"}
    ]

    return (
        <div>
            <h2>리스트</h2>
            <ul>    
                {/* {names.map((item, index) => (
                    <li key={index}>{item}</li>
                ))} */}
                {users.map((user) => (
                    <li key={user.id}>{user.id} {user.name}</li>
                ))}
            </ul>
        </div>
    )   

}

export default Example1