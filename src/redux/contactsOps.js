import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66856f30b3f57b06dd4cb96e.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      var response = axios.get("/contacts", {}).then((response) => {
        return response.data;
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      var response = axios.post("/contacts", newContact).then((response) => {
        return response.data;
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    axios.delete(`/contacts/${contactId}`, {});
    return contactId;
  }
);
