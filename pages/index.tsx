import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsList } from "../store/action-creators";
import HomeStyles from "./../styles/Home.module.scss";
import TokenTable from "components/tokenTable/tokenTable";
import { tokens } from "services/tokens";
import { HomeProps } from "./models/props.model";

const Home: NextPage<HomeProps> = ({ tokenData }) => {
  const dispatch = useDispatch();
  const { getSocketData, getTokenData } = bindActionCreators(
    actionsList,
    dispatch
  );

  useEffect(() => {
    getSocketData();
    getTokenData(tokenData);
  }, [getSocketData, getTokenData, tokenData]);

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

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=97dd300a852ee541aa3b91dca21d70e712007311&ids=${tokens
      .toString()
      .toUpperCase()}`
  );
  const tokenData = await response.json();

  return { props: { tokenData } };
}

export default Home;
