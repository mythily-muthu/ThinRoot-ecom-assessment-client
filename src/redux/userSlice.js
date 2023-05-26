import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload; // res user obj 
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
});

// export actions
export const { loginSuccess, loginFailure, logout } = userSlice.actions;
//export user reducer
export default userSlice.reducer;