import { ChakraProvider, extendTheme, Box, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "../lib/chakra/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" minH="100vh" bg="dark">
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
