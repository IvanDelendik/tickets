const defaultState = {
  tickets: null,
};

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TICKETS":
      return { ...state, tickets: state.tickets + 1 };
    case "DEL_TICKETS":
      return { ...state, tickets: state.tickets - 1 };
    default:
      return state;
  }
};
