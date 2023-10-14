import {createSlice} from '@reduxjs/toolkit'

export const users = createSlice({
    name: "user",
    initialState:{
        iSLogin: false
    },
    reducers: {
        checkLogin: (state) => {

        }
    }
})

export const {
    checkLogin
} = users.actions;

