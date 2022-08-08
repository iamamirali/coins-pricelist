import { WebsocketData } from "store/models/Websocket.model";

export type TokenNewOldDataProps = {
  newData: WebsocketData[];
  oldData: WebsocketData[];
};
