import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers, // In `configureStore`, it's `reducer` (singular)
});

export default store;
