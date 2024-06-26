import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// syzdavame userSlice, akcentyt e v/u tozi i dolniq fayl
const initialState = {
    user: { username: 'coding addict' },
    theme: 'sunset',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login');
        },
        logoutUser: (state) => {
            console.log('logout');
        },
        toggleTheme: (state) => {
            console.log('toggle theme');
        },
    },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;