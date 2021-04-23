import {
  PRODUCT_SELECTED,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from "../actions/types";

// const defaultState = {
//   select: null,
//   disabled: false,
// };

const productActive = (state = null, action) => {
  switch (action.type) {
    case PRODUCT_SELECTED:
      return action.payload;
    case ENABLE_BUTTONS:
      return { ...state, disabled: false };
    case DISABLE_BUTTONS:
      return { ...state, disabled: true };
    default:
      return state;
  }
};

export default productActive;
