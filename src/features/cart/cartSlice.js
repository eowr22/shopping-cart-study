import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    total: { cnt: 0, price: 0 },
  },
  reducers: {
    addItem(state, action) {
      const newItem = { cnt: 1, price: action.payload.price };

      state.items[action.payload.name] === undefined
        ? (state.items[action.payload.name] = newItem)
        : (state.items[action.payload.name].cnt += 1);

      state.total.cnt += 1;
      state.total.price += action.payload.price;
    },
    deleteItem(state, action) {
      state.total.price -=
        state.items[action.payload[0]].price *
        state.items[action.payload[0]].cnt;
      state.total.cnt -= state.items[action.payload[0]].cnt;
      delete state.items[action.payload[0]];
    },
    decreaseCnt(state, action) {
      if (state.items[action.payload[0]].cnt > 1) {
        state.items[action.payload[0]].cnt -= 1;

        state.total.cnt -= 1;
        state.total.price -= action.payload[1].price;
      }
    },
    increaseCnt(state, action) {
      state.items[action.payload[0]].cnt += 1;

      state.total.cnt += 1;
      state.total.price += action.payload[1].price;
    },
  },
});

export const { addItem, deleteItem, decreaseCnt, increaseCnt } =
  cartSlice.actions;

export default cartSlice.reducer;
