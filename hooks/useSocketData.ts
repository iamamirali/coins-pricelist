import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { WebsocketData } from "../store/models/Websocket.model";

function useSocketData(data: WebsocketData) {
  const [socketData, setSocketData] = useState<WebsocketData[]>([]);
  const tokenData = useSelector((state: RootState) => state.tokenData.data);
  let updatedList: WebsocketData[] = [];

  if (socketData.length == 0 && data) {
    setSocketData([data]);
  }
  if (socketData.length > 0) {
    updatedList = [...socketData];
    const existingToken = updatedList.findIndex((item: WebsocketData) => {
      return item.s == data.s;
    });

    if (existingToken == -1) {
      updatedList.push(data);
      setSocketData(updatedList);
    } else {
      updatedList[existingToken] = data;
    }
  }
  return [updatedList];
}

export default useSocketData;
