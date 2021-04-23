import {
  ADD_TO_BACKET,
  PRODUCT_SELECTED,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./types";

export function addBacketCount() {
  return { type: ADD_TO_BACKET, payload: 1 };
}

export function enableButtons(product) {
  return {
    type: ENABLE_BUTTONS,
    payload: product,
  };
}

export function disableButtons(product) {
  return {
    type: DISABLE_BUTTONS,
    payload: product,
  };
}

export function select(product) {
  return {
    type: PRODUCT_SELECTED,
    payload: product,
  };
}
