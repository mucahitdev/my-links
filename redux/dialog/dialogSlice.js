import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    dialog: null,
    open: false,

    saveLoading: false,
};

export const asyncSaveLink = createAsyncThunk(
    "dialog/asyncSaveLink",
    async (newLink) => {
        const response = await fetch("/api/create/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newLink,
            })
        });
        const data = await response.json();
        return data;
    }
);

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
    extraReducers: {
        [asyncSaveLink.pending]: (state, action) => {
            state.saveLoading = true;
        },
        [asyncSaveLink.fulfilled]: (state, action) => {
            state.saveLoading = false;
            state.open = false;
        },
        [asyncSaveLink.rejected]: (state, action) => {
            state.saveLoading = false;
        }
    }
});

export const { setDialog, setDialogOpen } = dialogSlice.actions;

export default dialogSlice.reducer;