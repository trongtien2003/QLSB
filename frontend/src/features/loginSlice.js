import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: false,
        guestLogin: false,
    },
    reducers: {
        handleLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        handleGuestLogin: (state, action) => {
            state.guestLogin = action.payload;
        },
    },
});

export const { handleLogin, handleGuestLogin } = loginSlice.actions;
export default loginSlice.reducer;
