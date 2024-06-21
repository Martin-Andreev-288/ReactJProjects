import { createSlice } from '@reduxjs/toolkit';
// syzdavame slice - to e neshto kato feature na prilozhenieto
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer