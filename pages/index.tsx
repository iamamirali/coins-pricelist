import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import useSocketData from "../hooks/useSocketData";
import { actionCreators } from "../store/action-creators/index";
import { RootState } from "../store/rootState.model";

const Home: NextPage = () => {
  const socketData = useSelector((state: RootState) => state.socket.data);
  const dispatch = useDispatch();
  const { getSocketData } = bindActionCreators(actionCreators, dispatch);
  const [tokenData] = useSocketData(socketData);

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
