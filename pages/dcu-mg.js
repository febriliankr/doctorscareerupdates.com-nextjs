import Head from "next/head";
import Footer from "../components/Footer";

export default function DcuMg() {
  return (
    <div className="home-container">
      <Head>
        <title>Medical Games | DCU 2020</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>
      <div className="eventdetails__container">
        <h1>DCU Medical Games</h1>
        <p>
          Merupakan sebuah pre-event DCU 2020 dengan mengadakan perlombaan
          kedokteran yang bersifat open registration bagi mahasiswa kedokteran
          preklinik.
        </p>
        <p>Coming soon</p>
      </div>
      <Footer/>
    </div>
  );
}
