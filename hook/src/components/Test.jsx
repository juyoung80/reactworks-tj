import { useEffect, useState } from "react";

const Test = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        console.log("페이지 로딩...")
    }, [time])
   

    return(
        <div>
            <p>페이지 로딩</p>
        </div>
    )
}

export default Test