import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
