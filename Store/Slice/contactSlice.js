import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  },
  isLoading: false,
  error: null
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { updateFormData, setLoading, setError } = contactSlice.actions;
export default contactSlice.reducer;