import { Dispatch } from "redux";
import { tokens } from "services/tokens";

export function getSocketData() {
  return function (dispatch: Dispatch) {
    for (let token of tokens) {
      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${token}usdt@trade`
      );
      socket.onmessage = (event: MessageEvent) => {
        const { data } = event;
        dispatch({
          type: "getWebsocket",
          payload: JSON.parse(data),
        });
      };
    }
  };
}
