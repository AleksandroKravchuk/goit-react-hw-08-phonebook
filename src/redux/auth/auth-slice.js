import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.addUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = true;
      }
    );
    builder.addMatcher(userApi.endpoints.logOutUser.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
