import { Grid, GridItem, Box, Heading, Text, Tag, Divider, Button } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import talksData from '../data/talks';

function Talks() {
  return (
    <Box>
      <Box mb="2rem">
        <Heading mb="1rem">
          <span role="image">🎉</span> I'm always up for talks!
        </Heading>
        <Text mb="1rem">
          I'm always ready for joining conferences as a speaker! <br />I already have some talks
          ready with the following topics:
        </Text>

        <Box mb="1rem">
          {talksData.topics.map((topic) => (
            <Tag key={topic} mr="1rem" mb="1rem" colorScheme="purple">
              {topic}
            </Tag>
          ))}
        </Box>

        <a href="mailto:ciao@micheleriva.it">
          <Button leftIcon={<ChatIcon />} colorScheme="blue" size="md">
            Reach out!
          </Button>
        </a>
      </Box>

      <Divider mb="2rem" />

      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8}>
        {talksData.recordings.map((talk) => (
          <GridItem key={talk.name}>
            <Box p="1rem" bg="gray.200" borderRadius={5}>
              <iframe
                width="100%"
                height="300"
                src={talk.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
              <Box mt="1rem">
                <Heading size="s"> {talk.name}</Heading>
                <Tag colorScheme="orange" mt="1rem">
                  {talk.lang}
                </Tag>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Talks;
