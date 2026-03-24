
import {useState} from 'react'

const Example2 = () => {
        
    const [count, setCount] = useState(0)   
    

    const good = () => {
        setCount(count + 1);
    }  

    const nogood = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <p>카운트 : {count}</p>
            <button onClick={good}>좋아요</button>{' '}
            <button onClick={nogood}>싫어요</button>{' '}
            <button onClick={reset}>초기화</button>
        </div>
    )   
}


export default Example2