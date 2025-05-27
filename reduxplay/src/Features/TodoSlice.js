import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  arr: [{ id: nanoid(), text: "hello" }],
};

export const todoslice = createSlice({
  name: "Todosliceapp",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const values = {
        id: nanoid(),
        text: action.payload,
      };
      state.arr.push(values);
    },
  },
});

export const { addtodo } = todoslice.actions;
export default todoslice.reducer;
