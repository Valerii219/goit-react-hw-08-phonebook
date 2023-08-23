import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterReducer } from "./filterSlice/filterSlice";
import { contactsReducer } from "./contactsSlice/contactsSlice";
import { authReducer } from "./auth/slice";



const persistConfig = {
  key: 'root',
  storage,
   whitelist:['token',]
}
 
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({reducer: {
    contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
  }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),})
 
  export const persistor = persistStore(store)