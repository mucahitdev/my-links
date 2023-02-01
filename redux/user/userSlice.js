import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,

    notSaverUserData: {
        socials: [],
        links: [],
        session: null,
        username: null
    },

    createUserLinkLoading: false,
    createUserLinkError: null,

    queryUserNameTaken: null,
    queryUserNameLoading: 'idle' | 'pending' | 'succeeded',
    queryUserNameError: null,

    notSaverUserDataLoading: false,
    notSaverUserDataError: null,
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

export const asyncUpdateUserData = createAsyncThunk(
    "user/updateUserData",
    async ({ username, newData }) => {
        const response = await fetch('/api/update/userdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                newData
            })
        });
        const data = await response.json();
        return data;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addSocial: (state, action) => {
            state.notSaverUserData.socials.push(action.payload);
        },
        deleteSocial: (state, action) => {
            state.notSaverUserData.socials = state.notSaverUserData.socials.filter(social => social.type !== action.payload);
        },
        addLink: (state, action) => {
            state.notSaverUserData.links.push(action.payload);
        },
        deleteLink: (state, action) => {
            state.notSaverUserData.links = state.notSaverUserData.links.filter(link => link.uuid !== action.payload);
        },
        resetSaveData: (state, action) => {
            state.notSaverUserData = state.user;
        },
    },
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
            state.notSaverUserData = action.payload;
        },
        [asyncGetUser.rejected]: (state, action) => {
            state.user = null;
            state.notSaverUserData = null;
        },
        [asyncUpdateUserData.pending]: (state, action) => {
            state.notSaverUserDataLoading = true;
        },
        [asyncUpdateUserData.fulfilled]: (state, action) => {
            state.notSaverUserDataLoading = false;
            state.user = state.notSaverUserData;
        },
        [asyncUpdateUserData.rejected]: (state, action) => {
            state.notSaverUserDataError = action.error.message;
        }
    }
});

export const selectUser = (state) => state.user.user;
export const selectCreateUserLinkLoading = (state) => state.user.createUserLinkLoading;
export const selectCreateUserLinkError = (state) => state.user.createUserLinkError;

export const selectQueryUserNameTaken = (state) => state.user.queryUserNameTaken;
export const selectQueryUserNameLoading = (state) => state.user.queryUserNameLoading;
export const selectQueryUserNameError = (state) => state.user.queryUserNameError;



export const {
    addSocial,
    deleteSocial,
    addLink,
    resetSaveData,
    deleteLink
} = userSlice.actions;

export default userSlice.reducer;
