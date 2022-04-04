import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SpaceX API</title>
      </Head>

      <Layout>
        <section className="grid place-items-center sm:grid-cols-2 gap-x-16 gap-y-8">
          <article className="space-y-1">
            <Image
              src="/images/missions.png"
              width={250}
              height={250}
              alt="missions"
            />
            <h2 className="text-xl font-bold hover:underline">
              <Link href="/missions">
                <a>Missions</a>
              </Link>
            </h2>
          </article>

          <article className="space-y-1">
            <Image
              src="/images/rockets.png"
              width={250}
              height={250}
              alt="rockets"
            />
            <h2 className="text-xl font-bold hover:underline">
              <Link href="/roket">
                <a>Rockets</a>
              </Link>
            </h2>
          </article>

          <article className="space-y-1">
            <Image
              src="/images/launchpads.png"
              width={250}
              height={250}
              alt="launchpads"
            />
            <h2 className="text-xl font-bold hover:underline">
              <Link href="/launchpads">
                <a>Launchpads</a>
              </Link>
            </h2>
          </article>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
