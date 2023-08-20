import { logOutThunk, loginThunk, refreshThunk, signUpThunk } from './actions';
import {
  handeFulfiledLogOut,
  handeFulfiled,
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
      .addCase(signUpThunk.fulfilled, handeFulfiled)
      .addCase(loginThunk.fulfilled, handeFulfiled)
      .addCase(logOutThunk.fulfilled, handeFulfiledLogOut)
      .addCase(refreshThunk.fulfilled, handeFulfiled)

      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
