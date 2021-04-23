import { combineReducers } from "redux";
import addFilmsToBacket from "./addFilmsToBacket";
import nowcinema from "./nowCinema";
import sooncinema from "./soonCinema";
import productActive from "./productActive";

export const rootReducer = combineReducers({
  filmsReducer: addFilmsToBacket,
  now: nowcinema,
  soon: sooncinema,
  active: productActive,
});
