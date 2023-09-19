import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './auth.js/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
