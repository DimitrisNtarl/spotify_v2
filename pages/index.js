import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/spotify.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}