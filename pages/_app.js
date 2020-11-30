import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Michele Riva - Software Architect {'&'} Engineer </title>
        <meta property="og:image" content="/ogimage.png" key="og:image" />
        <meta
          property="og:title"
          content="Michele Riva - Software Architect & Engineer"
          key="og:title"
        />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:site" content="@michelerivacode" key="twitter:site" />
        <meta name="twitter:creator" content="@hackdoor_io" key="twitter:creator" />
        <meta
          name="twitter:title"
          content="Michele Riva - Software Architect & Engineer"
          key="twitter:title"
        />
        <meta name="twitter:image" content="/ogimage.png" key="twitter:image" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="keywords"
          content="coding, programming, software architecture, software engineering"
        />
      </Head>
      <ChakraProvider>
        <Box bg="gray.50" minHeight="100vh">
          <Center>
            <Box width={900} maxWidth="85vw" minHeight="100vh" pt="4rem" pb="4rem">
              <Header />
              <Box pt="2rem">
                <Component {...pageProps} />
              </Box>
            </Box>
          </Center>
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
