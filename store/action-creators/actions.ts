import { Dispatch } from "redux";

const tokens = ["btcusdt", "ethusdt", "dogeusdt", "etcusdt"];

export function getSocketData() {
  return function (dispatch: Dispatch) {
    for (let token of tokens) {
      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${token}@ticker`
      );
      socket.onmessage = (event: any) => {
        dispatch({
          type: "websocket",
          payload: JSON.parse(event.data),
        });
      };
    }
  };
}
