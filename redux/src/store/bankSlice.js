import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0 //잔액
}

const bankSilce = createSlice({
    name: 'bank',
    initialState,
    redecers:{
        //예금
        deposit: (state, action) => {
            state.balance += action.payload
        },

        //출금
        withdraw: (state, action) => {
            //잔액이 출금액보다 작으면 잔액이 부족합니다 라고 알림
            if(state.balance >= action.payload){
                state.balance -= action.payload                
            }else{
                alert("잔액이 부족합니다.")
            }
            
        }
    }
})

//액션과 리듀서를 내보내기
export const {deposit, withdraw} = bankSilce.actions
export default bankSilce.reducer