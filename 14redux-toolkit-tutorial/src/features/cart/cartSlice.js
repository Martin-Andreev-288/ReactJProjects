import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
/* zapochvame da fetchvame dannite ot link, vmesto ot fayl v prilozhenieto.
We cannot just simoly set this up in our current reducers, it's not going to work.
That's why with redux toolkit, we install another library, the think one, and
from the redux toolkit we get this createAsyncThunk and we right away wanna
invoke it and we wanna export the result */
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
            // tozi amount ne tr da go byrkame s gorniq v initialState!
            // toy e za tozi konkreten item (tozi mezhdu strelkite vdqsno ot item-a)
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;