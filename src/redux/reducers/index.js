import { combineReducers } from "redux";
import { ticketsReducer } from "./ticketsReducer";
import nowcinema from "./nowCinema";
import sooncinema from "./soonCinema";
import productActive from "./productActive";

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  now: nowcinema,
  soon: sooncinema,
  active: productActive,
});
