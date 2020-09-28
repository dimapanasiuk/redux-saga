import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";

import data from "./saga/reducers/data";

export const rootReducer = combineReducers({
  counter: counterReducer,
  data,
});
