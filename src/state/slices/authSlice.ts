/**
 * Redux slice for managing authorization accessTokens in memiry
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceState } from 'shared/interface/stateModel';

const initialState: AuthSliceState = {
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'Auth State',
  initialState,
  reducers: {
    setAuthToken: (
      state: AuthSliceState,
      { payload }: PayloadAction<string>
    ) => {
      state.accessToken = payload;
    },
  },
});

// Selectors
export const selectToken = (state: {
  auth: {
    accessToken: string;
  };
}) => state.auth.accessToken;

export const { setAuthToken } = authSlice.actions;
export default authSlice.reducer;
