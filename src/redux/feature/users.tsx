import {createSlice} from '@reduxjs/toolkit'

export const users = createSlice({
    name: "user",
    initialState:{
        isLogin: false
    },
    reducers: {
        checkLogin: (state) => {
            if (localStorage.token) {
                state.isLogin = true
            }else {
                state.isLogin = false
            }
        },
    }
})

export const {
    checkLogin
} = users.actions;

export default users.reducer;

