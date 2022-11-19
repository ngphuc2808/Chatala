import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';
import { messageType } from '../../../utils/types';

// Type for our state
export interface messageState {
  list: messageType[];
  loading: boolean;
}

const messageInitialState: messageType[] = []

// Initial state
const initialState: messageState = {
  list: messageInitialState,
  loading: false,
};

// Actual Slice
export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    requestMessage(state, action) {
      state.loading = true;
      state.list = messageInitialState;
    },

    setMessage(state, action) {
      state.loading = false;
      state.list = action.payload;
    },

    clearMessage(state, action) {
      state.loading = false;
      state.list = messageInitialState;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   // @ts-ignore
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.roomInfo,
    //     };
    //   },
    // },
  },
});

export const messageActions = messageSlice.actions;

export const selectMessageState = (state: AppState) => state.messages;

export default messageSlice.reducer;