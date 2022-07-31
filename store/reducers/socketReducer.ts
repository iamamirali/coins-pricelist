import { WebsocketAction } from "../models/Websocket.model";

const socketReducer = (state = {}, action: WebsocketAction) => {
  if (action.type == "getWebsocket") {
    return { ...state, data: action.payload };
  } else {
    return state;
  }
};

export default socketReducer;
