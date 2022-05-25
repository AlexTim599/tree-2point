import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { buildTree } from "../../utils";

const initialState = {
  todos: [],
  selectedItem: []
};

export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      "https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62"
    );
    // console.log(result.data.files["view.json"].content);
    dispatch(
      setTodo(
        buildTree(
          JSON.parse(result.data.files["view.json"].content).entityLabelPages[0]
        )
      )
    );
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    selectTodo: (state, action) => {
      state.selectedItem = action.payload
    }
  },
  extraReducers: {
    [getTodos.fulfilled]: () => console.log("fulfilled"),
    [getTodos.pending]: () => console.log("pending"),
    [getTodos.rejected]: () => console.log("rejected"),
  },
});
export const { setTodo, selectTodo } = todoSlice.actions;

export default todoSlice.reducer;
