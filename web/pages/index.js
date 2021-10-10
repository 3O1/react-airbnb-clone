import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

/** Represents home / */

export default function Home() {
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
    </div>
  );
}
