import { configureStore } from '@reduxjs/toolkit';

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
import { contactApi } from './operations';
import reducers from './reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, reducers),
    [contactApi.reducerPath]: contactApi.reducer,
  },
  // { contacts: persistReducer(contactsPersistConfig, reducers) },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});
export const persistor = persistStore(store);
