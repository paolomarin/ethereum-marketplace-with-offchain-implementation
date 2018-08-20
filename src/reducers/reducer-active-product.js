import { AT_PRODUCTS } from "../actions/types/types-product";

export default function(state = null, action) {
  if (action.type === AT_PRODUCTS.READ) {
    return action.payload;
  } else {
    return state;
  }
}
