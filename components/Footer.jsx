import { Box, Center } from '@chakra-ui/react';
import Social from './Social';

function Footer() {
  return (
    <Box bg="cyan.100" p="2rem">
      <Center>
        <Box width={900} maxWidth="85vw">
          <Box width={250}>
            <Social />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Footer;
