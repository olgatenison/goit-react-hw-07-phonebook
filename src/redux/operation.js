import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a4da5152f07a8b4a3dcabc.mockapi.io/contacts';

//  fetch all Contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('Fetch Contacts Response:', response.data); // Added console.log
      return response.data;
    } catch (error) {
      console.error('Fetch Contacts Error:', error.message); // Added console.error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, contact);
      console.log('Add Contact Response:', response.data); // Added console.log
      return response.data;
    } catch (error) {
      console.error('Add Contact Error:', error.message); // Added console.error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`); // Fixed the URL
      console.log('Delete Contact Response:', response.data); // Added console.log
      return response.data;
    } catch (error) {
      console.error('Delete Contact Error:', error.message); // Added console.error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
