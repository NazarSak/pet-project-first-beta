import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Неправильні дані автентифікації');
      }
  
      const userData = await response.json();
  
      return userData;
    } catch (error) {
      throw error;
    }
  });