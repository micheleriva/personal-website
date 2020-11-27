import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { useColorMode, Box, Center } from '@chakra-ui/react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <ChakraProvider>
        <Box bg="gray.50" minHeight="100vh">
          <Center>
            <Box width={1200} maxWidth="90vw" minHeight="100vh" pt="4rem">
              <Header />
              <Box pt="2rem">
                <Component {...pageProps} />
              </Box>
            </Box>
          </Center>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
