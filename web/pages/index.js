import Head from "next/head";
import Header from "../components/Header";

/** Represents home / */

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  );
}