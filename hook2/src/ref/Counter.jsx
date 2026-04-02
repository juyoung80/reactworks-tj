import { useRef, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    console.log("랜더링....");
    console.log(countRef); //{current:0} 객체인데 0이 저장

    //상태증가
    const increaseCount = () => {
        setCount(count + 1);
    }

    //참조(Reference, 간접 접근) 증가
    //랜더링이(상태 업데이트) 되어도 값을 유지함
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref:", countRef.current);
    }

    //일반 변수 증가
    //랜더링이 되면(상태 업데이트) 초기화 함
    const increaseCountVar = () => {
        countVar = countVar + 1;
        console.log("var:", countVar)
    }

    return (
        <div>
            <h2>userRef() 예제</h2>
            <h3>State: {count}</h3>
            <h3>Ref: {countRef.current}</h3>
            <h3>Var: {countVar}</h3>

            <button onClick={increaseCount}>State 증가</button>
            <button onClick={increaseCountRef}>Ref 증가</button>
            <button onClick={increaseCountVar}>Var 증가</button>
        </div>
    )
}

export default Counter