import { Dispatch } from "redux";
import { TokenData } from "store/models/TokenData.model";

export function getTokenData(tokenData: TokenData[]) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: "getTokenData",
      payload: tokenData,
    });
  };
}
