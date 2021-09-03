import { configureStore } from '@reduxjs/toolkit';
import twentyFortyEightReducer from './twentyFortyEightSlice';

export default configureStore({
  reducer: {
    twentyFortyEight: twentyFortyEightReducer,
  },
});
