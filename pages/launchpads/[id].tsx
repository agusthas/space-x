import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { useLandPad } from "@/modules/LandingPads/hook";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, data: landPad, error } = useLandPad(id as string);
  const location = `${landPad?.location?.name}, ${landPad?.location?.region}, ${landPad?.location?.latitude}, ${landPad?.location?.longitude}`;

  return (
    <>
      <Head>
        <title>Landing Pad: {landPad?.full_name || "..."}</title>
      </Head>

      <Layout>
        <h1 className="mt-12 text-3xl font-bold">
          Landing Pad: {landPad?.id || "..."}
        </h1>

        {isLoading ? (
          <span>Loading...</span>
        ) : isError ? (
          <span>Error: {error.message}</span>
        ) : (
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="text-lg">{landPad?.full_name}</p>
            </div>
            <div>
              <p className="text-gray-500">Details</p>
              <p className="text-lg">{landPad?.details}</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-lg">{landPad?.status}</p>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="text-lg">{location}</p>
            </div>
            <div>
              <p className="text-gray-500">Landing Type</p>
              <p className="text-lg">{landPad?.landing_type}</p>
            </div>
            <div>
              <p className="text-gray-500">Attemped Landings</p>
              <p className="text-lg">{landPad?.attempted_landings}</p>
            </div>
            <div>
              <p className="text-gray-500">Successful Landings</p>
              <p className="text-lg">{landPad?.successful_landings}</p>
            </div>
            <div>
              <p className="text-gray-500">Wikipedia</p>
              <p className="text-lg">{landPad?.wikipedia}</p>
            </div>
          </div>
        )}
        <Link href="/launchpads">
          <a className="block px-24 py-2 mx-auto mt-16 text-lg font-medium bg-gray-200 rounded-md hover:bg-gray-300 max-w-max">
            Back
          </a>
        </Link>
      </Layout>
    </>
  );
};

export default Home;
