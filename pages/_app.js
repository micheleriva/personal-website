import "../styles/recoleta.css";
import "../styles/globals.css";

import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen bg-pink-50 text-xl">
      <NavBar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
