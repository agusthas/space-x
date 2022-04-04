import Head from "next/head";
import Layout from "@/components/Layout";
import { useAllMissions } from "../../modules/Missions/hook";
import Link from "next/link";

const Missions = () => {
  const missionsQuery = useAllMissions();

  return (
    <div>
      <Head>
        <title>SpaceX API - Missions</title>
      </Head>

      <Layout>
        <section className="my-6">
          <h1 className="text-3xl font-bold">Missions</h1>
          <div className="mt-6">
            {missionsQuery.isLoading && <span>Loading ...</span>}
            {missionsQuery.isError && <span>Error</span>}
            {missionsQuery.isSuccess && (
              <ul className="space-y-6">
                {missionsQuery.data.map(({ mission_id, mission_name }) => (
                  <li key={mission_id}>
                    <Link href={"/missions/" + mission_id}>
                      <a className="block py-4 px-5 border border-gray-200 rounded-lg font-bold hover:bg-gray-200 hover:border-gray-300">
                        {mission_name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Missions;
