import { WebsocketData } from "./Websocket.model";

export interface RootState {
  socket: {
    data: WebsocketData;
  };
}
