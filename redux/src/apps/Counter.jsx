import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "../store/counterSlice"
import { useState } from "react"

const Counter = () => {

    const count = useSelector(state => state.counter.count)

    const [inputValue, setInputValue] = useState(0);

    const handelInputChange = (e) => {
        setInputValue(Number(e.target.value))

    }

    const dispatch = useDispatch()

    //입력값만큼 카운트를 증가 시키는 함수
    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(inputValue))
    }

    return(
        <div>
            <h2>Counter</h2>
            <h3>Count : {count}</h3>

            <div>
                <button onClick={() => dispatch(increment())}>증가</button>
                <button onClick={() => dispatch(decrement())}>감소</button>
                <button onClick={() => dispatch(reset())}>초기화</button>
            </div>   

            <div className="brTag">
                <input 
                type="number"
                value={inputValue}
                onChange={handelInputChange} 
                />
                <button onClick={handleIncrementAmount}>입력값만큼 증가</button>
            </div>       


        </div>
    )
}

export default Counter