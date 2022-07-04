import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "../styles/recoleta.css";
import "../styles/globals.css";

import { SEO } from "../components/SEO";
import { NavBar } from "../components/NavBar/index";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("CGANGE");
      setShowMobileNav(false);
    });

    return () => {
      router.events.off("routeChangeStart");
    };
  }, [router]);

  return (
    <div className="w-full min-h-screen bg-pink-50 text-xl">
      <SEO />
      <NavBar show={showMobileNav} onChangeVisibility={setShowMobileNav} />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
