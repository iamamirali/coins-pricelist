import useSocketData from "hooks/useSocketData";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { cryptoSymbol } from "crypto-symbol";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";

const { nameLookup } = cryptoSymbol({});

function TokenTable() {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const [tokenData] = useSocketData(socketData);

  function getTokenSymbol(token: string) {
    return token.split("USDT")[0];
  }

  function showCryptoList() {
    return tokenData.map((item: WebsocketData) => {
      const { p, s } = item;
      const tokenSymbol = getTokenSymbol(s);
      const tokenName = nameLookup(tokenSymbol);

      return (
        <tr key={s}>
          <td>
            {tokenName}{" "}
            <span className={TableStyles.extraTitle}>{tokenSymbol}</span>
          </td>
          <td>${+p}</td>
        </tr>
      );
    });
  }

  return (
    <table className={TableStyles.table}>
      <thead className={TableStyles.head}>
        <tr>
          <th>Token Name</th>
          <th>
            Price <span className={TableStyles.extraTitle}>(USDT)</span>
          </th>
        </tr>
      </thead>
      <tbody className={TableStyles.body}>
        {tokenData.length > 0 && showCryptoList()}
      </tbody>
    </table>
  );
}

export default TokenTable;
