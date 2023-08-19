import { logOut, login, signUp } from "services/auth";

const { createAsyncThunk } = require("@reduxjs/toolkit");


export const signUpThunk = createAsyncThunk('.auth/signUp',async(body, {rejectWithValue}) =>{
try {
    return  await signUp(body)
} catch (error) {
    return rejectWithValue(error.response.data)
}
})

export const loginThunk = createAsyncThunk('.auth/login',async(body, {rejectWithValue}) =>{
    try {
        return  await login(body)
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
    })

    export const logOutThunk = createAsyncThunk('.auth/logOut',async(body, {rejectWithValue}) =>{
        try {
            return  await logOut(body)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
        })