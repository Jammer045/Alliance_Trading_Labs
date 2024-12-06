import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Slice/contactSlice.js';

export const store = configureStore({
  reducer: {
    contact: contactReducer
  }
});