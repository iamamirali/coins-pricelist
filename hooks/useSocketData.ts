import { useState } from "react";

function useSocketData(data: any) {
  const [socketData, setSocketData] = useState<any>([]);
  let updatedList: any = [];

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
