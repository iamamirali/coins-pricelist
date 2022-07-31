import { useState } from "react";
import { WebsocketData } from "../store/models/Websocket.model";

function useSocketData(data: WebsocketData) {
  const [socketData, setSocketData] = useState<WebsocketData[]>([]);
  let updatedList: WebsocketData[] = [];

  if (socketData.length == 0 && data) {
    setSocketData([data]);
  }
  if (socketData.length > 0) {
    updatedList = [...socketData];
    const existingToken = updatedList.findIndex((item: any) => {
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
