import { Heading, Grid, GridItem, Tag } from '@chakra-ui/react';
import featuredData from '../data/featured';

function Featured() {
  return (
    <>
      <Heading mb="2rem">I've been featured on </Heading>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={6}>
        {featuredData.map((item) => (
          <a href={item.url} key={item.url} target="_blank">
            <GridItem p="1rem" border="1px" borderColor="gray.300" borderRadius={5}>
              <Heading size="s" color="blue.500" mb="0.5rem">
                {' '}
                {item.medium} <Tag colorScheme="orange"> {item.lang} </Tag>{' '}
              </Heading>
              <Heading size="md" color="gray.900">
                {' '}
                {item.title}{' '}
              </Heading>
            </GridItem>
          </a>
        ))}
      </Grid>
    </>
  );
}

export default Featured;
