import { Dispatch } from "redux";

const tokens = [
  "btcusdt",
  "ethusdt",
  "dogeusdt",
  "etcusdt",
  "vetusdt",
  "xrpusdt",
  "shibusdt",
  "linkusdt",
  "lunausdt",
  "avaxusdt",
];

export function getSocketData() {
  return function (dispatch: Dispatch) {
    for (let token of tokens) {
      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${token}@trade`
      );
      socket.onmessage = (event: MessageEvent) => {
        dispatch({
          type: "getWebsocket",
          payload: JSON.parse(event.data),
        });
      };
    }
  };
}
