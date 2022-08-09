import { Dispatch } from "redux";

export function getTokenData(tokenData: any) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: "getTokenData",
      payload: tokenData,
    });
  };
}
