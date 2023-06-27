import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from './contacts.js/contactSlice';

export const store = configureStore({
  reducer:{
    contacts: contactReducers,
  }
});
