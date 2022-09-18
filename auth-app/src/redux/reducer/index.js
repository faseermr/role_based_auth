import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { Reducer } from "./Reducer";

export const rootReducer = combineReducers({
  data: Reducer,
  user: authReducer,
});
