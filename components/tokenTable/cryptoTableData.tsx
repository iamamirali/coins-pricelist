import { memo, useEffect, useState } from "react";
import Image from "next/image";
import changeDetector from "services/changeDetoctor";
import { WebsocketData } from "store/models/Websocket.model";
import TableStyles from "./tokenTable.module.scss";
import { tokens } from "services/tokens";
import { TokenNewOldDataProps } from "components/models/props.model";

const ShowTokenData = (props: TokenNewOldDataProps) => {
  const { newData, oldData } = props;
  const [cryptoData, setCryptoData] = useState<any>();
  async function getTokenData() {
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=97dd300a852ee541aa3b91dca21d70e712007311&ids=${tokens
        .toString()
        .toUpperCase()}`
    );
    const data = await response.json();
    setCryptoData(data);
  }

  useEffect(() => {
    getTokenData();
  }, []);

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
      const tokenData = cryptoData?.find((token: any) => {
        return token.symbol == tokenSymbol;
      });
      const { name, logo_url } = tokenData;

      return (
        <tr key={symbol}>
          <td>
            <Image src={logo_url} alt={name} width="25px" height="25px" />
            {name} <span className={TableStyles.symbol}>{tokenSymbol}</span>
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
