import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dialog: null,
    open: false,
};

export const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        setDialog: (state, action) => {
            state.dialog = action.payload;
        },
        setDialogOpen: (state, action) => {
            state.open = action.payload;
        },
    },
});

export const { setDialog, setDialogOpen } = dialogSlice.actions;

export default dialogSlice.reducer;