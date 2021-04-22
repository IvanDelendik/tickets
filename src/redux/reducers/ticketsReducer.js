import { ADD_TO_BACKET } from "../actions/types";

const defaultState = {
  films: 0,
};

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_BACKET:
      return { ...state, films: state.films + 1 };
    // case DEL_TICKETS:
    //   return { ...state, tickets: state.tickets - 1 };
    default:
      return state;
  }
};
