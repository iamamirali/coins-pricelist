import { cryptoSymbol } from "crypto-symbol";
import { memo, useEffect } from "react";
import Image from "next/image";
import changeDetector from "services/changeDetoctor";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";

const { nameLookup } = cryptoSymbol({});

const ShowTokenData = (props: any) => {

  function getTokenSymbol(token: string) {
    return token.split("USDT")[0];
  }

  function showCryptoList() {
    return props.newData.map((item: WebsocketData, i: number) => {
      const { p: price, s: symbol } = item;
      const tokenSymbol = getTokenSymbol(symbol);
      const tokenName = nameLookup(tokenSymbol);
      const changeStatus = `tokenPrice${changeDetector(
        +props.oldData[i]?.p,
        +price
      )}`;

      return (
        <tr key={symbol}>
          <td>
            <Image
              //   src={`https://assets.coincap.io/assets/icons/btc@2x.png`}
              src={`https://cryptoicons.org/api/icon/${tokenSymbol.toLowerCase()}/200`}
              alt=""
              width="20px"
              height="20px"
            />
            {tokenName}{" "}
            <span className={TableStyles.symbol}>{tokenSymbol}</span>
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
