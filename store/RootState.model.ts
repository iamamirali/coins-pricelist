import { WebsocketData } from "./models/Websocket.model";

export interface RootState {
  socket: {
    data: WebsocketData;
  };
}
