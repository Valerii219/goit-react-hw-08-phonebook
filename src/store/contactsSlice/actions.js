import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, fetchContacts ,deleteContacts} from "services/contacts";




export const getAllContactsThunk = createAsyncThunk('contacts/getContacts', () =>
  fetchContacts()
);

export const createContactsThunk = createAsyncThunk('contacts/addContact', (data) =>
  addContacts(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', (data) =>
deleteContacts(data)

);
