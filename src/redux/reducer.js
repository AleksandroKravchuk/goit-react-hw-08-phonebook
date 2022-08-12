import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
// import {
//   fetchGetContact,
//   fetchAddContact,
//   fetchDeleteContact,
// } from './operations';

// const items = createReducer([], {
//   [fetchGetContact.fulfilled]: (_, { payload }) => [...payload],
//   [fetchAddContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [fetchDeleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload.id),
// });

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  // items,
  filter,
});
