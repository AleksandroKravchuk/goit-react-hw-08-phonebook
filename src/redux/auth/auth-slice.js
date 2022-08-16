import { createSlice } from '@reduxjs/toolkit';
import { useAddUserMutation } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: { useAddUserMutation },
});

export default authSlice.reducer;
