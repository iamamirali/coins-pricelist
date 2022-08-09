import { memo } from "react";
import Image from "next/image";
import changeDetector from "services/changeDetoctor";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";
import { TokenNewOldDataProps } from "components/models/props.model";
import { useSelector } from "react-redux";
import { RootState } from "store/models/RootState.model";
import { TokenData } from "store/models/TokenData.model";

const ShowTokenData = (props: TokenNewOldDataProps) => {
  const { newData, oldData } = props;
  const tokenData = useSelector((state: RootState) => state.tokenData.data);

  function getTokenSymbol(token: string) {
    return token.split("USDT")[0];
  }

  function showCryptoList() {
    return newData.map((item: WebsocketData, i: number) => {
      const { p: price, s: symbol } = item;
      const tokenSymbol = getTokenSymbol(symbol);
      const changeStatus = `tokenPrice${changeDetector(
        +oldData[i]?.p,
        +price
      )}`;
      const cryptoData = tokenData?.find((token: TokenData) => {
        return token.symbol == tokenSymbol;
      });
      const { name, logo_url } = cryptoData as TokenData;

      return (
        <tr key={symbol}>
          <td>
            <div className={TableStyles.tokenItem}>
              <Image
                src={logo_url}
                alt={name}
                className={TableStyles.tokenIcon}
                width="25px"
                height="25px"
                style={{
                  borderRadius: "50%",
                }}
              />
              <span className={TableStyles.tokenName}>{name}</span>
              <span className={TableStyles.symbol}>{tokenSymbol}</span>
            </div>
          </td>
          <td className={TableStyles[changeStatus]}>${+price}</td>
        </tr>
      );
    });
  }

  return <>{showCryptoList()}</>;
};

const CryptoTableData = memo(ShowTokenData);

export default CryptoTableData;
