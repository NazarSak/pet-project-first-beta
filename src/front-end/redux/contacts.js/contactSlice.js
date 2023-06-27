import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    ]
}


const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
        state.contacts = [...state.contacts, action.payload]
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  },
});
  

export const {addContact,removeContact} = contactsSlice.actions
export const contactReducers = contactsSlice.reducer