const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, tickets: state.tickets + 1 };
    case "GET_CUSTOMERS":
      return { ...state, tickets: state.tickets + 1 };
    default:
      return state;
  }
};
