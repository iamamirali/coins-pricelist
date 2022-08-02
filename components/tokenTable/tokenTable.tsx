import useSocketData from "hooks/useSocketData";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";

function TokenTable() {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const [tokenData] = useSocketData(socketData);

  //   console.log(tokenData);

  function showCryptoList() {
    return tokenData.map((item: WebsocketData) => {
      return (
        <tr key={item.s}>
          <td>{item.s}</td>
          <td>{+item.p}</td>
        </tr>
      );
    });
  }

  return (
    <table className={TableStyles.table}>
      <thead className={TableStyles.head}>
        <tr>
          <th>Token</th>
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
