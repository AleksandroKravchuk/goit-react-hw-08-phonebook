import { createSlice } from '@reduxjs/toolkit';
// import { useAddUserMutation } from './auth-operations';
import { createAction } from '@reduxjs/toolkit';

export const getDataRegister = createAction('get/register');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [getDataRegister]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = true;
    },
    // [useAddUserMutation](state) {
    //   // state.user = action.payload.user;
    //   // state.token = action.payload.token;
    //   state.isLoading = true;
    // },
  },
});
// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });
export default authSlice.reducer;
