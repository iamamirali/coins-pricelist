import { combineReducers } from "redux";
import socketReducer from "./socketReducer";

const reducers = combineReducers({
  socket: socketReducer,
});

export default reducers;
