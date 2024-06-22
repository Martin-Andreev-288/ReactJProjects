import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

/* pravim taka, che nadpisyt za potvyrzhdenie dali iskame
da clear-nem cart-a da se poqvava samo ako cyknem tozi
buton. Syotvetno pravim taka i che vyprosnite butoni da
rabotqt kakto se ochakva */