import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";

import data from "./infoCard/sagaReducers/data";

export const rootReducer = combineReducers({
  counter: counterReducer,
  data,
});
