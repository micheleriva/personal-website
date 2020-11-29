import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { useColorMode, Box, Center } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
