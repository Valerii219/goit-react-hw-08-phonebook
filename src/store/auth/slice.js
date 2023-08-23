import {
  currentUser,
  logOutThunk,
  loginThunk,
  registerThunk,
} from './operations';
import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLoading = true;
    })
    .addCase(registerThunk.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLoading = true;
    })
    .addCase(loginThunk.rejected, (state, action) => {
      state.error = action.payload;
    })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isLoading = false;
        state.token = null;
      })
      .addCase(currentUser.pending, (state, action) => {
       
        state.isLoading = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
       
        state.isLoading = false;
      })
      
  },
});

export const authReducer = authSlice.reducer;