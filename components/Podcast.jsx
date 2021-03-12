import Image from 'next/image';
import Link from 'next/link';
import { Heading, Box, Grid, GridItem, Text, Button } from '@chakra-ui/react';

function Episode({ title, id, guests }) {
  return (
    <Link href={`/inference/${id}`} passHref>
      <a>
        <Box p={3} bg="gray.100" borderRadius={5}>
          <Heading size="m"> {title} </Heading>
          <Text color="gray.600"> {guests.map(({ fullName }) => fullName).join(', ')} </Text>
        </Box>
      </a>
    </Link>
  );
}

function Podcast({ data }) {
  return (
    <div>
      <Heading mb="2rem">My Podcast</Heading>
      <Grid gridTemplateColumns={['220px 1fr']} gridColumnGap={6}>
        <GridItem>
          <Box mt={2}>
            <Image
              src={data.image.url}
              alt={`${data.name} podcast`}
              layout="fixed"
              width={220}
              height={220}
            />
            <Link href="/inference" passHref>
              <Button isFullWidth colorScheme="purple">
                {' '}
                All episodes{' '}
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem>
          <Heading size="lg"> {data.name} Podcast </Heading>
          <Text mb={3}>{data.description}</Text>
          <Grid gridRowGap={3} gridTemplateColumns={'1fr'}>
            {data.episodes.map((episode) => (
              <GridItem key={episode.id}>
                <Episode {...episode} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Podcast;
