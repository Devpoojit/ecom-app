import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const status = state.products.some((p) => p.id === product.id);
      if (status) {
        state.products = state.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
  },
});

export default slice.reducer;
export const { addItem } = slice.actions;
