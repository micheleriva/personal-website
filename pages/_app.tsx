import { ChakraProvider, Box } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import theme from "../lib/chakra/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        .backdrop-blur {
          background-color: rgba(0, 0, 0, 0.5);
        }
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
          .backdrop-blur {
            background-color: rgba(0, 0, 0, 0);
          }
        }
      `}</style>
      <DefaultSeo
        defaultTitle="Michele Riva | Software architect, book author, international speaker"
        description="Passionate and experienced software architect, book author, and public speaker from Milan, Italy."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://micheleriva.it",
          site_name: "MicheleRiva.it",
          images: [
            {
              url: "https://micheleriva.it/imgs/generic-ogimage.png",
              alt: "Michele Riva",
              height: 1920,
              width: 1080,
            },
          ],
        }}
        twitter={{
          handle: "@MicheleRivaCode",
          site: "@MicheleRivaCode",
          cardType: "summary_large_image",
        }}
      />
      <ChakraProvider theme={theme}>
        <Box w="100%" minH="100vh" bg="dark">
          <Navbar />
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
