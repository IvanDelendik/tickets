import { ADD_TO_BACKET, DEL_TO_BACKET } from "../actions/types";

const defaultState = {
  films: 0,
};

const addFilmsToBacket = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_BACKET:
      return { ...state, films: state.films + 1 };
    case DEL_TO_BACKET:
      return { ...state, films: state.films - 1 };
    default:
      return state;
  }
};
export default addFilmsToBacket;
