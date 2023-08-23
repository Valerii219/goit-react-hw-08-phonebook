import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  createContactsThunk,
  deleteContactsThunk,
  getAllContactsThunk
} from "./actions";

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
 
    .addCase(getAllContactsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    })
    .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.contacts = payload;
    })
    .addCase(getAllContactsThunk.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    })
    .addCase(createContactsThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(createContactsThunk.fulfilled, state => {
      state.isLoading = false;
    })
    .addCase(createContactsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteContactsThunk.fulfilled, (state, action) => {
       state.isLoading = false;
        
    });
  }
});

export const contactsReducer = contactsSlice.reducer;
// export const { createContacts, deleteContacts } = contactsSlice.actions;