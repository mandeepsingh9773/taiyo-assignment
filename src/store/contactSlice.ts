import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types/contact";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      // Push the new contact (from action.payload) into the contacts array
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      // Find the index of the contact to update by matching the id
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      // Filter out the contact whose id matches the action.payload
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
