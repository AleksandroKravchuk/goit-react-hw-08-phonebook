import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';

import {
  persistStore,
  persistReducer,
  PAUSE,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { contactApi } from './operations';
import { userApi } from './auth/auth-operations';
import filter from './reducer';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPersistConfig, reducers),
    auth: persistReducer(userPersistConfig, authSlice),
    filter,
    // authSlice,
    // [contactApi.reducerPath]: contactApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // { contacts: persistReducer(contactsPersistConfig, reducers) },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactApi.middleware,
    userApi.middleware,
  ],
});
export const persistor = persistStore(store);
