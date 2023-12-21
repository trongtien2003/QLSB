import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "login",
    initialState: {
        userData: {},
        guest: {},
    },
    reducers: {
        saveUser: (state, action) => {
            state.userData = action.payload;
        },
        saveGuest: (state, action) => {
            state.guest = action.payload;
        },
    },
});

export const { saveUser, saveGuest } = userSlice.actions;
export default userSlice.reducer;
