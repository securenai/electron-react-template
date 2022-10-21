/**
 * Slice for managing login user-related info
 */

import { createSlice } from '@reduxjs/toolkit';

type SliceState = { status: 'loading' } | { userInfo: unknown };

const initialState: SliceState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload };
    },
  },
});

// Selectors
export const selectUserName = (state: { user: { userName: string } }) =>
  state.user.userName;

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
