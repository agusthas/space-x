import type { NextPage } from "next";
import { useRocketDetail } from "@/modules/Rockets/hook";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const DetailRocket: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isError,
    data: rocket,
    error,
  } = useRocketDetail(id as string);

  return (
    <>
      <Head>
        <title>Rocket: {rocket?.rocket_name}</title>
        <meta name="description" content="SpaceX Rocket" />
      </Head>
      <Layout>
        <h1 className="mt-12 text-3xl font-bold">
          Rocket: {rocket?.rocket_name}
        </h1>
        {rocket ? (
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-gray-500">Comapny</p>
              <p className="text-lg">{rocket?.company}</p>
            </div>
            <div>
              <p className="text-gray-500">Description</p>
              <p className="text-lg">{rocket?.description}</p>
            </div>
          </div>
        ) : isLoading ? (
          <p>Loading ...</p>
        ) : (
          <p>{isError ? error.message : "Not Found"}</p>
        )}

        <Link href="/rockets">
          <a className="block px-24 py-2 mx-auto mt-16 text-lg font-medium bg-gray-200 rounded-md hover:bg-gray-300 max-w-max">
            Back
          </a>
        </Link>
      </Layout>
    </>
  );
};

export default DetailRocket;
