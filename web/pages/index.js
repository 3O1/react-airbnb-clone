import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

/** Represents home / */

export default function Home({ exploreData, liveAnywhereData }) {
  return (
    <div className="">
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-3xl font-semibold">Explore nearby</h2>

          {/* API
           * make optional to protect
           *
           * set the `SmallCard` props to the item
           */}

          <div className="grid grid-cols-1 -ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        {/* Live anywhere */}
        <section>
          <h2 className="py-8 text-3xl font-semibold">Live anywhere</h2>
          <div className="flex py-3 space-x-3 overflow-scroll scrollbar-hide">
            {liveAnywhereData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const liveAnywhereData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
