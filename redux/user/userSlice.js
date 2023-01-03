import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 'nam nam',
};

export const userSlice = createSlice({
    name: "user",
    initialState
});

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
