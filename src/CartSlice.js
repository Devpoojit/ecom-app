import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      console.log(product);

      state.products.push(product);
    },
  },
});

export default slice.reducer;
export const { addItem } = slice.actions;
