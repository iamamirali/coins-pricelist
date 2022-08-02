import useSocketData from "hooks/useSocketData";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { cryptoSymbol } from "crypto-symbol";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";
import { useEffect, useState } from "react";
import changeDetector from "services/changeDetoctor";

const { nameLookup } = cryptoSymbol({});

function TokenTable() {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const [tokenData] = useSocketData(socketData);
  const [newData, setNewData] = useState<WebsocketData[]>([]);
  const [oldData, setOldData] = useState<WebsocketData[]>([]);

  useEffect(() => {
    const tokenDataTimer = setTimeout(() => {
      setOldData(newData);
      setNewData(tokenData);
    }, 2000);
    return () => clearTimeout(tokenDataTimer);
  }, [newData]);

  function getTokenSymbol(token: string) {
    return token.split("USDT")[0];
  }

  function showCryptoList() {
    return newData.map((item: WebsocketData, i) => {
      const { p: price, s: symbol } = item;
      const tokenSymbol = getTokenSymbol(symbol);
      const tokenName = nameLookup(tokenSymbol);
      const status = `tokenPrice${changeDetector(+oldData[i]?.p, +price)}`;

      return (
        <tr key={symbol}>
          <td>
            {tokenName}{" "}
            <span className={TableStyles.symbol}>{tokenSymbol}</span>
          </td>
          <td className={TableStyles[status]}>${+price}</td>
        </tr>
      );
    });
  }

  return (
    <table className={TableStyles.table}>
      <thead className={TableStyles.head}>
        <tr>
          <th>Token Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className={TableStyles.body}>
        {tokenData.length > 0 && showCryptoList()}
      </tbody>
    </table>
  );
}

export default TokenTable;
