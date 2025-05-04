import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        addBalance: (state, action) => {
            state.value += action.payload;
        },
        subtractBalance: (state, action) => {
            state.value = Math.max(0, state.value - action.payload); // не уходит в минус
        },
        resetBalance: (state) => {
            state.value = 0;
        },
    },
});

export const { addBalance, subtractBalance, resetBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
