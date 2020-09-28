import Head from "next/head";
import axios from "axios";
import Navbar from "../components/Navbar";
import Link from "next/link";
import HeroSectionSingular from "../components/HeroSectionSingular";

export default function Home() {
  const handleClick = (e) => {
    axios.get(`/api/hello`).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div>
      <Head>
      <title>Doctors' Career Updates</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>
      <div className="home-container">
        <section>
          <img className="big-logo" src="logo-dcu-big.png" alt="Logo DCU 2020" />
          <section className="big-title"><h1>Pioneering prospects,<br></br>perceiving synergism</h1></section>
          <HeroSectionSingular/>
        </section>
      </div>
    </div>
  );
}
