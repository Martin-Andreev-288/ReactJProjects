import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
/* instalirame redux dev tools v chrome. Kato go napravim, ni se dobavq pole za izbirane redux, ot koeto mozhem da vidim informaciq. Vizh vdqsno. Zasega, est, e malko
That's why this tool is very useful - because as we'll dispatch our actions, we'll clearly see how our state changes. */