import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "'Lora', serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box w="100%" minH="100vh" bg="gray.900">
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
