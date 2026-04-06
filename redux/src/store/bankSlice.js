import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0 //잔액
}

const bankSilde = createSlice({
    name: 'bank',
    initialState,
    redecers:{
        //예금
        deposit: (state, action) => {
            state.balance += action.payload
        },

        //출금
        withdraw: (state, action) => {
            state.balance -= action.payload
        }
    }
})

export const {deposit, withdraw} = bankSilde.actions
export default bankSilde.reducer