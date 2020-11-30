import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Button, Grid, Heading, Flex, Spacer, Divider } from '@chakra-ui/react';
import navbarData from '../data/navbar';

function Header() {
  const { asPath } = useRouter();

  const menuBtnStyle = (path) => {
    if (path === asPath) {
      return {
        bg: 'blue.500',
        color: 'white',
        variant: 'solid',
        _hover: { bg: 'blue.600' },
      };
    }

    return {
      variant: 'ghost',
    };
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center" mb="2rem">
        <Link href="/">
          <Box style={{ cursor: 'pointer' }}>
            <Heading as="h1" size="xl">
              Michele Riva
            </Heading>
            <Heading as="h2" size="l" color="gray.500">
              Software Architect {'&'} Engineer
            </Heading>
          </Box>
        </Link>
        <Spacer />
        <Grid gap={2} templateColumns={`repeat(${navbarData.length}, 1fr)`}>
          {navbarData.map((link) => (
            <Link href={link.path} passHref>
              <Box key={link.name} as="a">
                <Button isFullWidth {...menuBtnStyle(link.path)}>
                  {link.name}
                </Button>
              </Box>
            </Link>
          ))}
        </Grid>
      </Flex>
      <Divider />
    </>
  );
}

export default Header;
