import { TokenData } from "./TokenData.model";
import { WebsocketData } from "./Websocket.model";

export interface RootState {
  socket: {
    data: WebsocketData;
  };
  tokenData: {
    data: TokenData[];
  };
}
