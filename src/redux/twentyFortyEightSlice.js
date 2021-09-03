import { createSlice } from '@reduxjs/toolkit';

export const twentyFortyEightSlice = createSlice({
  name: 'twentyFortyEight',
  initialState: {
    board: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  reducers: {
    setBoard: (state, { payload }) => {
      state.board = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, setRow, setCell } = twentyFortyEightSlice.actions;

export default twentyFortyEightSlice.reducer;
