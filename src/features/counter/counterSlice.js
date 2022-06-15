import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => { 
            if(state.value >= 0){
                state.value += 1;
                console.log("state.value", state.value);
            }
        },
        decrement: (state) => { 
            if(state.value > 0){
                state.value -= 1;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }



    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;