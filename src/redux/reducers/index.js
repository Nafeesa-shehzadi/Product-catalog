import addItem from "./addItem";
import { combineReducers } from "redux";
import fetchProducts from "./ProductReducer";

const rootReducers = combineReducers({
  addItem,
  fetchProducts, // In `configureStore`, it's `reducer` (singular)
});

export default rootReducers;
