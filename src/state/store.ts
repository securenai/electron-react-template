import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './slices/layoutSlice';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: { user: userReducer, layout: layoutReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
