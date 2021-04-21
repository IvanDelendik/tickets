import { createStore, combineReducers } from "redux";
import { ticketsReducer } from "./reducers/ticketsReducer";
import { customerReducer } from "./reducers/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
