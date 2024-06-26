import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
/* konfigurirame redux toolkit. Vazhno utochnenie - citiram instruktora - for the most part, at least in my opinion, when we use the latest version of react-router-dom, there's actually
very little need for state management libraries, since we can nicely set up all our logic in the route page and pass everything down with the context prop. No ponezhe instruktoryt
enjoy-va, izpolzvayki redux toolkit, shte izpolzva tozi approach vmesto tova. Inache vizhdame vsichki state-ove dolu vdqsno */
const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload);
        },
        clearCart: (state) => { },

        removeItem: (state, action) => { },
        editItem: (state, action) => { },
    },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;