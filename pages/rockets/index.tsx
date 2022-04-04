import type { NextPage } from "next";
import { useAllRockets } from "@/modules/Rockets/hook";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const Rockets: NextPage = () => {
  const { isLoading, isError, data: rockets, error } = useAllRockets();

  return (
    <>
      <Head>
        <title>SpaceX Rockets</title>
        <meta name="description" content="SpaceX Rockets List" />
      </Head>

      <Layout>
        <h1 className="mt-12 text-3xl font-bold">Rockets</h1>
        <div className="mt-6">
          {rockets ? (
            rockets.map((rocket) => {
              return (
                <Link
                  key={rocket.rocket_id}
                  href={`/rockets/${rocket.rocket_id}`}
                >
                  <a className="block px-6 py-4 mt-4 font-medium border-2 border-gray-100 rounded-md hover:bg-gray-100">
                    {rocket.rocket_name}
                  </a>
                </Link>
              );
            })
          ) : isLoading ? (
            <p>Loading ...</p>
          ) : (
            <p>{isError ? error.message : "Empty"}</p>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Rockets;
