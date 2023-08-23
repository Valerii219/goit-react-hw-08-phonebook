import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
// import { token } from "store/auth/operations";

export const getAllContactsThunk = createAsyncThunk('contacts/getContacts', async(_,thunkAPI) =>{
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
);

export const createContactsThunk = createAsyncThunk('contacts/addContact', async(contact, thunkAPI) =>{
  try {
    await axios.post('/contacts', contact);
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
  
);

export const deleteContactsThunk = createAsyncThunk('/contacts/{contactId}', async(contactId, thunkAPI) =>{
  try {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

// export const patchContactsThunk = createAsyncThunk('/contacts/{contactId}', async(contactId, thunkAPI) =>{
//   const state = thunkAPI.getState()
// const persTokenContacts = state.contacts.contacts;

// if(persTokenContacts === null){
//   return thunkAPI.rejectWithValue('Unable to fetch user');}
//   token.set(persTokenContacts)
//   try {
//   const {data} = await axios.patch(`/contacts/${contactId}`);
//   return data;

//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// }
// )
