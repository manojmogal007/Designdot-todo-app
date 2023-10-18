
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import todosreducer from './slice';

export const store = configureStore({
  reducer: {
    todos: todosreducer,
  },
  middleware: [thunk],
});

