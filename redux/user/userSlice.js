import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,

    createUserLinkLoading: false,
    createUserLinkError: null,

    queryUserNameTaken: null,
    queryUserNameLoading: 'idle' | 'pending' | 'succeeded',
    queryUserNameError: null,


};

export const asyncCreateUserLink = createAsyncThunk(
    "user/createUserLink",
    async ({ username, session }) => {
        const response = await fetch(`/api/list/create/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session)
        });

        const data = await response.json();
        return data;
    }
)

export const asyncQueryUserName = createAsyncThunk(
    "user/queryUserName",
    async (id) => {
        const response = await fetch(`/api/get/username/${id}`);
        const data = await response.json();
        return data;
    }
)

export const asyncGetUser = createAsyncThunk(
    "user/getUser",
    async (bio) => {
        const response = await fetch(`/api/get/usersession/${bio}`);
        const data = await response.json();
        return data;
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [asyncCreateUserLink.pending]: (state, action) => {
            state.createUserLinkLoading = true;
        },
        [asyncCreateUserLink.fulfilled]: (state, action) => {
            state.createUserLinkLoading = false;
        },
        [asyncCreateUserLink.rejected]: (state, action) => {
            state.createUserLinkLoading = false;
            state.createUserLinkError = action.error.message;
        },
        [asyncQueryUserName.pending]: (state, action) => {
            state.queryUserNameLoading = 'pending';
        },
        [asyncQueryUserName.fulfilled]: (state, action) => {
            state.queryUserNameTaken = action.payload;
            state.queryUserNameLoading = 'succeeded';
        },
        [asyncQueryUserName.rejected]: (state, action) => {
            state.queryUserNameLoading = 'idle';
            state.queryUserNameError = action.error.message;
        },
        [asyncGetUser.pending]: (state, action) => {
            state.user = null;
        },
        [asyncGetUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const selectUser = (state) => state.user.user;
export const selectCreateUserLinkLoading = (state) => state.user.createUserLinkLoading;
export const selectCreateUserLinkError = (state) => state.user.createUserLinkError;

export const selectQueryUserNameTaken = (state) => state.user.queryUserNameTaken;
export const selectQueryUserNameLoading = (state) => state.user.queryUserNameLoading;
export const selectQueryUserNameError = (state) => state.user.queryUserNameError;

export default userSlice.reducer;
