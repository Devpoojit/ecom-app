import { createSlice } from '@reduxjs/toolkit';

function loadCart() {
  try {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    }
  } catch (e) {
    console.error(e);
  }
  return { products: [], totalAmount: 0 };
}

const slice = createSlice({
  name: 'cart',
  initialState: {
    products: loadCart().products,
    totalAmount: 0,
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
      state.totalAmount = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.quantity = quantity;
      }
      state.totalAmount = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
      state.totalAmount = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },
  },
});

export default slice.reducer;
export const { addItem } = slice.actions;
export const { updateQuantity } = slice.actions;
export const { removeItem } = slice.actions;
