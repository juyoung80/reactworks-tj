import { useContext } from "react"
import { UserContext } from "./User"
import UserGrandChild from "./UserGrandChild"

const UserChild = () => {
    //UserContext에서 user 데이터를 가져옴
    const user = useContext(UserContext)

    return(
        <div className="user-child">
            <h2>UserChild 컴포넌트입니다.</h2>
            <p>사용자 이름 : {user.name}</p>
            <p>사용자 나이 : {user.age}</p>

            <UserGrandChild />
        </div>
    )
}

export default UserChild