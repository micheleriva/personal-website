import { useState } from 'react';
import { Grid, Button, Box, Select } from '@chakra-ui/react';
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

function sortCollection(sortBy) {
  switch (sortBy) {
    case 'rating_desc':
      return (x, y) => (x.rating < y.rating ? 1 : -1);
    case 'rating_asc':
      return (x, y) => (x.rating > y.rating ? 1 : -1);
    case 'price_desc':
      return (x, y) => (x.price < y.price ? 1 : -1);
    case 'price_asc':
      return (x, y) => (x.price > y.price ? 1 : -1);
  }
}

function filterByBrand(watch, brandFilter) {
  return brandFilter === '' ? Boolean : watch.brand === brandFilter;
}

function Watches({ watches }) {
  const [current, setCurrent] = useState(null);
  const [showPrice, setShowPrice] = useState(false);
  const [sorting, setSorting] = useState('rating_desc');
  const [brandFilter, setBrandFilter] = useState('');
  const currentProps = current ? watches.find((watch) => watch.id === current) : {};
  const totalPrice = watches.map(({ price }) => price).reduce((x, y) => x + y, 0);
  const uniqBrands = [...new Set(watches.map(({ brand }) => brand))];
  const collection = [...watches]
    .sort(sortCollection(sorting))
    .filter((watch) => filterByBrand(watch, brandFilter));

  return (
    <div>
      I've always been fascinated by watches. It's incredible how a mechanical movement, without any
      electronic component, can tell the time, day of the week or month, detect leap years, and
      lunar phases. It's an absolute miracle of engineering and beauty. Looking at the following
      watches, to me, it's like looking at a Michelangelo sculpture. <br />
      <b>I don't own the following watches, except for a couple of them (cheap ones).</b>
      <Box mt={4} mb={2}>
        <b>Total collection price:&nbsp;</b>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(totalPrice)}
      </Box>
      <WatchGalleryContext.Provider value={{ current, setCurrent }}>
        {current && <WatchCardDetail {...currentProps} />}
        <Box mt={6}>
          <Grid gridTemplateColumns={['1fr 1fr', 'repeat(4, 1fr)']} gap={10}>
            <Button
              onClick={() => setShowPrice(!showPrice)}
              colorScheme="blue"
              leftIcon={showPrice ? <ViewOffIcon /> : <ViewIcon />}>
              {showPrice ? 'Hide' : 'Show'} Prices
            </Button>
            <Select placeholder="Default sorting" onChange={(e) => setSorting(e.target.value)}>
              <option value="rating_desc"> Rating DESC </option>
              <option value="rating_asc"> Rating ASC </option>
              <option value="price_desc"> Price DESC </option>
              <option value="price_asc"> Price ASC </option>
            </Select>
            <Select placeholder="All Brands" onChange={(e) => setBrandFilter(e.target.value)}>
              {uniqBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
          </Grid>
        </Box>
        <Grid gap={3} mt={10} templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}>
          {collection.map((watch) => (
            <WatchCard key={watch.id} {...watch} showPrice={showPrice} />
          ))}
        </Grid>
      </WatchGalleryContext.Provider>
    </div>
  );
}

export default Watches;
