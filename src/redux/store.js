import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './operations';
import reducers from './reducer';
// import logger from 'redux-logger';
// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    contacts: reducers,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
