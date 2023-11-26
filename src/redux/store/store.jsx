import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
