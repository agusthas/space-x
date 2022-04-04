import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useMission } from "../../modules/Missions/hook";

const MissionDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const missionQuery = useMission(id as string);

  if (missionQuery.error) {
    return <span>Error: {missionQuery.error.message}</span>;
  }

  return (
    <div>
      <Head>
        <title>SpaceX API | {missionQuery.data?.mission_name || ""}</title>
      </Head>

      <Layout>
        <section className="my-6">
          {missionQuery.isLoading && <span>Loading ...</span>}
          {missionQuery.isSuccess && (
            <div>
              <h1 className="text-3xl font-bold mb-8">
                Mission: {missionQuery.data.mission_name}
              </h1>

              <div className="space-y-7">
                <div className="space-y-1">
                  <h2 className="text-sm text-gray-600 font-medium">
                    Manufacturers
                  </h2>
                  <ul className="list-disc list-inside">
                    {missionQuery.data.manufacturers.map((manufacturer, i) => (
                      <li key={i}>{manufacturer}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h2 className="text-sm text-gray-600 font-medium">
                    Payload IDs
                  </h2>
                  <ul className="list-disc list-inside">
                    {missionQuery.data.payload_ids.map((payloadId, i) => (
                      <li key={i}>{payloadId}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h2 className="text-sm text-gray-600 font-medium">Links</h2>
                  <ul className="list-disc list-inside">
                    {missionQuery.data.wikipedia && (
                      <li>
                        <a
                          href={missionQuery.data.wikipedia}
                          className="text-blue-500 visited:text-purple-500"
                        >
                          Wikipedia
                        </a>
                      </li>
                    )}
                    {missionQuery.data.website && (
                      <li>
                        <a
                          href={missionQuery.data.website}
                          className="text-blue-500 visited:text-purple-500"
                        >
                          Website
                        </a>
                      </li>
                    )}
                    {missionQuery.data.twitter && (
                      <li>
                        <a
                          href={missionQuery.data.twitter}
                          className="text-blue-500 visited:text-purple-500"
                        >
                          Twitter
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h2 className="text-sm text-gray-600 font-medium">
                    Payload IDs
                  </h2>
                  <p>{missionQuery.data.description}</p>
                </div>
              </div>
            </div>
          )}
          <button
            type="button"
            className="block mx-auto mt-16 bg-gray-50 rounded-md py-2 px-10 font-semibold hover:bg-gray-200"
            onClick={() => router.back()}
          >
            Back
          </button>
        </section>
      </Layout>
    </div>
  );
};

export default MissionDetail;
