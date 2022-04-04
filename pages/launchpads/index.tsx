import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAllLandPads } from "@/modules/LandingPads/hook";
import Head from "next/head";

const Home: NextPage = () => {
  const { isLoading, isError, data: landPads, error } = useAllLandPads();

  return (
    <>
      <Head>
        <title>Landing Pads</title>
      </Head>

      <Layout>
        <h1 className="mt-12 text-3xl font-bold">Landing Pads</h1>
        <div className="mt-6">
          {isLoading ? (
            <span>Loading...</span>
          ) : isError ? (
            <span>Error: {error.message}</span>
          ) : (
            landPads?.map((landPad) => (
              <Link key={landPad.id} href={`/launchpads/${landPad.id}`}>
                <a className="block px-6 py-4 mt-4 font-medium border-2 border-gray-100 rounded-md hover:bg-gray-100">
                  {landPad.id}: {landPad.full_name}
                </a>
              </Link>
            ))
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
