import { PRODUCT_SELECTED } from "../actions/types";

const productActive = (state = null, action) => {
  switch (action.type) {
    case PRODUCT_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

export default productActive;
