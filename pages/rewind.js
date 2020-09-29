import Head from "next/head";
import RewindComponent from "../components/RewindComponent";

export default function rewind() {
  return (
    <div className="home-container">
      <Head>
        <title>Rewind | DCU 2020</title>
      </Head>
      <RewindComponent />
    </div>
  );
}
