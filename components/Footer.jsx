import Link from 'next/link';
import { Box, Center, Flex, Grid, GridItem, Heading, Link as ChackraLink } from '@chakra-ui/react';

const FooterNavLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Resume',
    route: '/resume',
  },
  {
    label: 'Talks',
    route: '/talks',
  },
  {
    label: 'Contacts',
    route: '/contacts',
  },
];

const FooterExtraLinks = [
  {
    label: 'My imaginary watch collection',
    route: '/watches',
  },
  {
    label: 'Gear',
    route: '/gear',
  },
  {
    label: 'Inference Podcast',
    route: 'https://youtube.com/playlist?list=PLVNFy4aOttkQipukm-JlWYQvdedM55TZ9',
    external: true,
  },
];

const Social = [
  {
    label: 'Twitter',
    route: 'https://twitter.com/MicheleRivaCode',
  },
  {
    label: 'LinkedIn',
    route: 'https://www.linkedin.com/in/micheleriva95/',
  },
  {
    label: 'GitHub',
    route: 'https://github.com/MicheleRiva',
  },
  {
    label: 'Instagram',
    route: 'https://instagram.com/mitch_sleva',
  },
];

const GitHubSponsor = () => (
  <iframe
    src="https://github.com/sponsors/micheleriva/card"
    title="Sponsor micheleriva"
    height={200}
    width={700}
    style={{ border: 0, maxWidth: '90vw', zIndex: 0 }}
  />
);

function Footer() {
  return (
    <Box bg="gray.100">
      <Box bg="gray.200" p="2rem" zIndex={1}>
        <Center>
          <Box width={900} maxWidth="85vw">
            <Flex width={'100%'} justifyContent="space-between">
              <Grid>
                <Heading size="md" mb={2}>
                  Site pages
                </Heading>
                {FooterNavLinks.map((link) => (
                  <GridItem key={link.route}>
                    <Link href={link.route} passHref>
                      <ChackraLink>{link.label}</ChackraLink>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
              <Grid>
                <Heading size="md" mb={2}>
                  Extra
                </Heading>
                {FooterExtraLinks.map((link) => (
                  <GridItem key={link.route}>
                    <Link href={link.route} passHref>
                      <ChackraLink target={link.external ? '_blank' : ''}>{link.label}</ChackraLink>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
              <Grid>
                <Heading size="md" mb={2}>
                  Social
                </Heading>
                {Social.map((link) => (
                  <GridItem key={link.route}>
                    <Link href={link.route} passHref>
                      <ChackraLink target={'_blank'}>{link.label}</ChackraLink>
                    </Link>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Flex justifyContent="center" alignItems="center" mb={[0, -100]}>
        <GitHubSponsor />
      </Flex>
    </Box>
  );
}

export default Footer;
