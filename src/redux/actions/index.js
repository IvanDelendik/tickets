import { ADD_TO_BACKET, PRODUCT_SELECTED } from "./types";

export function addBacket() {
  return { type: ADD_TO_BACKET, payload: 1 };
}

export function select(product) {
  return {
    type: PRODUCT_SELECTED,
    payload: product,
  };
}
