import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import bankReducer from './bankSlice'

export const store = configureStore({
    reducer: {
    // counterSlice에서 export한 reducer를 등록
    counter: counterReducer,
    bank: bankReducer,
    }
})