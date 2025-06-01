import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactData from '../components/Contact/Contact.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactData,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
