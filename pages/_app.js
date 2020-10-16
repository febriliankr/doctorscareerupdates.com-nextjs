import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
