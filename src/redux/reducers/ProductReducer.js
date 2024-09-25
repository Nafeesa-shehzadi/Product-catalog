// productReducer.js
import DATA from "../../Data";
const initialState = {
  items: DATA,
};

const fetchProducts = (state = initialState, action) => {
  switch (action.type) {
    // You can add more actions if needed in the future
    default:
      return state;
  }
};

export default fetchProducts; // Export the reducer as default
