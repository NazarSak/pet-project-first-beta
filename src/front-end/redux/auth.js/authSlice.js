import { createSlice } from '@reduxjs/toolkit';
import { loginAsync } from './actionCreator';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
  

export const { logout } = authSlice.actions
export default authSlice.reducer