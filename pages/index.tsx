import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsList } from "../store/action-creators";
import HomeStyles from "./../styles/Home.module.scss";
import TokenTable from "components/tokenTable/tokenTable";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { getSocketData } = bindActionCreators(actionsList, dispatch);

  useEffect(() => {
    getSocketData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <TokenTable />
      </main>
    </>
  );
};

export default Home;
