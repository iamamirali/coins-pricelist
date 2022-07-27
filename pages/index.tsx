import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import useSocketData from "../hooks/useSocketData";
import { actionCreators } from "../store/action-creators/index";

const Home: NextPage = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { getSocketData } = bindActionCreators(actionCreators, dispatch);
  const [tokenData] = useSocketData(state.socket.data);

  useEffect(() => {
    getSocketData();
  }, []);

  return (
    <>
      <Head>
        <title>Binance Coins Pricelist</title>
        <meta name="description" content="List of crypto currencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>binance price list</h1>
        <h2>{tokenData.length}</h2>
        {tokenData.length > 0 &&
          tokenData.map((item: any) => {
            return (
              <h2 key={item.s}>
                {item.s}: {+item.p}
              </h2>
            );
          })}
      </main>
    </>
  );
};

export default Home;
