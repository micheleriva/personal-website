import "../styles/recoleta.css";
import "../styles/globals.css";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen bg-pink-50 text-xl">
      <NavBar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
