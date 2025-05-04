import { createSlice } from '@reduxjs/toolkit';

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        items: [], // Список купленных предметов
    },
    reducers: {
        buyItem: (state, action) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload);
            }
        },
        resetPurchases: (state) => {
            state.items = [];
        }
    }
});

export const { buyItem, resetPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
