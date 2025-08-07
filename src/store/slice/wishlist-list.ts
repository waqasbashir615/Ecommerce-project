// store/slice/wishlist-list.ts
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: number[]; // Assuming product IDs are numbers
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((itemId) => itemId !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
