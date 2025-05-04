import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        vibration: true,
        music: true,
    },
    reducers: {
        toggleVibration: (state) => {
            state.vibration = !state.vibration;
        },
        toggleMusic: (state) => {
            state.music = !state.music;
        },
        resetSettings: (state) => {
            state.vibration = true;
            state.music = true;
        }
    }
});

export const { toggleVibration, toggleMusic, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
