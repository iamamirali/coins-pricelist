import useSocketData from "hooks/useSocketData";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";

function TokenTable() {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const [tokenData] = useSocketData(socketData);

  function showTokenSymbol(token: string) {
    return token.split("USDT")[0];
  }

  function showCryptoList() {
    return tokenData.map((item: WebsocketData) => {
      const { p, s } = item;
      return (
        <tr key={s}>
          <td>{showTokenSymbol(s)}</td>
          <td>{+p}</td>
        </tr>
      );
    });
  }

  return (
    <table className={TableStyles.table}>
      <thead className={TableStyles.head}>
        <tr>
          <th>Token</th>
          <th>
            Price <span className={TableStyles.currency}>(USDT)</span>
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
