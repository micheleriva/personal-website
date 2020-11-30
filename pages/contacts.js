import { Center, Box, Text, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Social from '../components/Social';

export function getStaticProps() {
  return {
    props: {},
  };
}

function Contacts() {
  const favoriteTopics = [
    'Programming languages, frameworks and tech stacks',
    'Philosophy',
    'Music',
    'Photography',
    'Everything else',
  ];

  return (
    <Box>
      <Box>
        <Heading>
          {' '}
          <span role="img">🚀</span> Let's talk!{' '}
        </Heading>
        <Text mt="1rem" maxWidth="500px">
          Here's a list of things that I like to talk about:
        </Text>
        <List mt="1rem">
          {favoriteTopics.map((topic) => (
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" /> {topic}
            </ListItem>
          ))}
        </List>
        <Text mt="1rem">
          so feel free to reach out on any of the following channels! <br />
          If you want to send a more formal message, you can always write to me at{' '}
          <Link href="mailto:ciao@micheleriva.it" color="blue.500">
            ciao[at]micheleriva.it
          </Link>
        </Text>
      </Box>
      <Center mt="4rem">
        <Box>
          <Social />
        </Box>
      </Center>
    </Box>
  );
}

export default Contacts;
