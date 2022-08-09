import { combineReducers } from "redux";
import socketReducer from "./socketReducer";
import tokenDataReducer from "./tokenDataReducer";

const reducers = combineReducers({
  socket: socketReducer,
  tokenData: tokenDataReducer,
});

export default reducers;
