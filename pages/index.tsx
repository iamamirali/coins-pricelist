import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import useSocketData from "../hooks/useSocketData";
import { actionsList } from "../store/action-creators";
import { RootState } from "../store/models/RootState.model";
import HomeStyles from "./../styles/Home.module.scss";
import { WebsocketData } from "../store/models/Websocket.model";

const Home: NextPage = () => {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const dispatch = useDispatch();
  const { getSocketData } = bindActionCreators(actionsList, dispatch);
  const [tokenData] = useSocketData(socketData);

  useEffect(() => {
    getSocketData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <>
      <Head>
        <title>Binance Coins Pricelist</title>
        <meta name="description" content="List of crypto currencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={HomeStyles.container}>
        <header className={HomeStyles.header}>
          <h1 className={HomeStyles.title}>Crypto Price List</h1>
        </header>
        <table className={HomeStyles.cryptoTable}>
          <tbody>
            <tr>
              <th>Token</th>
              <th>Price</th>
            </tr>
            {tokenData.length > 0 && showCryptoList()}
          </tbody>
        </table>
        {/* {tokenData.length > 0 &&
          tokenData.map((item: WebsocketData) => {
            return (
              <h2 key={item.s}>
                {item.s}: {+item.p}
              </h2>
            );
          })} */}
      </main>
    </>
  );
};

export default Home;
