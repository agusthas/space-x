import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SpaceX API</title>
      </Head>

      <div>
        <h1 className="text-red-500 font-bold text-2xl">SpaceX API</h1>
      </div>
    </div>
  );
};

export default Home;
