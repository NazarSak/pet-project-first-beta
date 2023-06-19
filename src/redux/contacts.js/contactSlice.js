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
  },
});
  

export const {addContact} = contactsSlice.actions
export const contactReducers = contactsSlice.reducer