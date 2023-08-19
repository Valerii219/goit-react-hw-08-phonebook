import { logOutThunk, loginThunk, signUpThunk } from './actions';
import {
  handeFulfiledLogOut,
  handeFulfiledSignUp,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handlers';
import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handeFulfiledSignUp)
      .addCase(loginThunk.fulfilled, handeFulfiledSignUp)
      .addCase(logOutThunk.fulfilled, handeFulfiledLogOut)

      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
