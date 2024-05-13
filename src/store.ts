import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from './services/api-service';

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  // not sure why you need this .middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemApi.middleware);
  },
});
