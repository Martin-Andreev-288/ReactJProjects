import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    winter: "winter",
    sunset: "sunset",
};
// tova e, za da getnem value-to na local storage-a, koyto e zapameten v browser-a,
// kogato komponenta mountne
const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem("theme") || themes.winter;
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};

const initialState = {
    user: { username: 'coding addict' },
    theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log(action.payload);
        },
        logoutUser: (state) => {
            state.user = null;
            // localStorage.clear()
            localStorage.removeItem('user');
            toast.success('Logged out successfully');
        },
        toggleTheme: (state) => {
            const { sunset, winter } = themes;
            state.theme = state.theme === sunset ? winter : sunset;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;