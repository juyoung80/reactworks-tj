import Avatar from "./Avatar";
import myPhoto from "../assets/user.png"
import Card from "./Card";

export default function Profile(){

    return (
        <div>
            <h2 className="tit">나의 프로필</h2>
            <Card>
                <Avatar 
                    size = {{
                        width: "300px",
                        height: "300px"
                    }}
                    person = {{
                        name: "연예인",
                        imageUrl: myPhoto
                    }}
                />
            </Card>
        </div>
    )
        
}