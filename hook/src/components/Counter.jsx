
//useState 함수를 임포트해야함.
import {useState} from 'react'

const Counter = () => {
    //useState(초기값)
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];
    // console.log(countState);      
    
    const [count, setCount] = useState(0)   

    //setCount() 사용
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>현재 카운트 : {count}</p><br/>
            <button onClick={increment}>+증가</button>{' '}
            <button onClick={decrement}>-감소</button>{' '}
            <button onClick={reset}>초기화</button>
        </div>
    )   
}


export default Counter