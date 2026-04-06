import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}


const counterSlice = createSlice({
    name: 'counter', // slice의 이름을 지정
    initialState,
    reducers: {
        //카운트 값을 1 증가시키는 reducer
        increment: (state) => {
            state.count += 1
        },
        //카운트 값을 1 감소
        decrement: (state) => {
            state.count -= 1
        },
        //초기화
        reset: (state) => {
            state.count = 0
        },
        //카운트 값을 특정 수량으로 증가
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
    }
})

//액션 생정자 export
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions
//리듀서를 export
export default counterSlice.reducer
