import { useState } from 'react';
import { Grid, Button, Box } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { createApolloClient } from '../../lib/graphql';
import GET_ALL_WATCHES from '../../lib/graphql/queries/watches/getAllWatches';
import WatchGalleryContext from '../../components/context/watchGalleryContext';
import WatchCard from '../../components/WatchCard';
import WatchCardDetail from '../../components/WatchCardDetail';

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_ALL_WATCHES });

  return {
    props: {
      watches: data?.watches,
    },
    revalidate: 3600,
  };
}

function Watches({ watches }) {
  const [current, setCurrent] = useState(null);
  const [showPrice, setShowPrice] = useState(false);
  const currentProps = current ? watches.find((watch) => watch.id === current) : {};

  return (
    <div>
      I've always been fascinated by watches. It's incredible how a mechanical movement, without any
      electronic component, can tell the time, day of the week or month, detect leap years, and
      lunar phases. It's an absolute miracle of engineering and beauty. Looking at the following
      watches, to me, it's like looking at a Michelangelo sculpture.
      <WatchGalleryContext.Provider value={{ current, setCurrent }}>
        {current && <WatchCardDetail {...currentProps} />}
        <Box mt={6}>
          <Button
            onClick={() => setShowPrice(!showPrice)}
            colorScheme="blue"
            leftIcon={showPrice ? <ViewOffIcon /> : <ViewIcon />}>
            {showPrice ? 'Hide' : 'Show'} Prices
          </Button>
        </Box>
        <Grid gap={3} mt={10} templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}>
          {watches.map((watch) => (
            <WatchCard key={watch.id} {...watch} showPrice={showPrice} />
          ))}
        </Grid>
      </WatchGalleryContext.Provider>
    </div>
  );
}

export default Watches;
