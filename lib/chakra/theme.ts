import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  colors: {
    dark: "#090516",
  },
});

export default customTheme;
