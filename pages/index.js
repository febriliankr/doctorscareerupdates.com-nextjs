import Head from "next/head";
import axios from "axios";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const handleClick = (e) => {
    axios.get(`/api/hello`).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div>
      <Head>
        <title>Nextjs Nodemailer App | Febrilian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-container">
        <section>
          <img className="big-logo" src="logo-dcu-big.png" alt="Logo DCU 2020" />
          <h1>”Synergism in the axis of visions”</h1>
        </section>
      </div>
    </div>
  );
}
