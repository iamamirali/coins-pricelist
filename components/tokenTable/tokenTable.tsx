import useSocketData from "hooks/useSocketData";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";
import { useEffect, useState } from "react";
import React from "react";
import CryptoTableData from "./cryptoTableData";

function TokenTable() {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const [tokenData] = useSocketData(socketData);
  const [newData, setNewData] = useState<WebsocketData[]>([]);
  const [oldData, setOldData] = useState<WebsocketData[]>([]);
  const data = useSelector((state: RootState) => state.tokenData.data);

  useEffect(() => {
    const tokenDataTimer = setTimeout(() => {
      setOldData(newData);
      setNewData(tokenData);
    }, 2000);
    return () => clearTimeout(tokenDataTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

  return (
    <>
      <table className={TableStyles.table}>
        <thead className={TableStyles.head}>
          <tr>
            <th>Token Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className={TableStyles.body}>
          {tokenData.length > 0 && (
            <CryptoTableData {...{ newData, oldData }} />
          )}
        </tbody>
      </table>
    </>
  );
}

export default TokenTable;
