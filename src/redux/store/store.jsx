import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counter/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
