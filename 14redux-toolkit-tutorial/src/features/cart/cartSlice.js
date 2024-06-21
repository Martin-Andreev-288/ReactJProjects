import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
// slagame cart item-ite tuk. V sledvashtata lekciq prodylzhavame
const initialState = {
    cartItems: cartItems,
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