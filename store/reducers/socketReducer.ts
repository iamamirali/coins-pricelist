import { WebsocketAction } from "../models/Websocket.model";

const socketReducer = (state = {}, action: WebsocketAction) => {
  const { type, payload } = action;
  if (type == "getWebsocket") {
    return { ...state, data: payload };
  } else {
    return state;
  }
};

export default socketReducer;
