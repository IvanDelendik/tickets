import { ADD_PRODUCT_BACKET } from "./types";

export const addBacket = () => {
  return (dispatch) => {
    console.log("addbask");
    dispatch({
      type: ADD_PRODUCT_BACKET,
    });
  };
};
