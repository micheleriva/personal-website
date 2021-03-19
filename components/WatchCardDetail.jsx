import { useEffect, useContext } from 'react';
import Image from 'next/image';
import { Box, Grid, Text, Heading, Divider, Flex, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import watchGalleryContext from '../components/context/watchGalleryContext';

function getStatus(owned, price) {
  if (owned) return '😍 owned!';

  switch (true) {
    case price > 50_000:
      return '😔 will never afford';
    case price > 10_000:
      return '😬 need to save some money!';
    case price > 1_000:
      return "😪 could have bought it if I wans't addicted to sushi";
    default:
      return '🙂 will buy in the future!';
  }
}

function WatchCardDetail(props) {
  const { setCurrent } = useContext(watchGalleryContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width={'100%'}
      minHeight={'100vh'}
      backgroundColor="gray.900"
      overflow='auto'
      zIndex={9}>
      <Box position="fixed" top={5} right={5} cursor="pointer" onClick={() => setCurrent(null)}>
        <Flex>
          <CloseIcon color="gray.100" w={4} h={4} />
          <Text color="gray.100" ml={2} mt={-1}>
            {' '}
            Close{' '}
          </Text>
        </Flex>
      </Box>
      <Grid templateColumns={["1fr", "40% 1fr"]}>
        <Box position="relative" width="100%" minHeight="100vh">
          <Image src={props.images[0].url} alt={props.model} layout="fill" objectFit="contain" />
        </Box>
        <Box p={50}>
          <Heading color="gray.100" size="2xl">
            {props.brand}
          </Heading>
          <Heading color="gray.500" size="2xl">
            {props.model}
          </Heading>
          <Text color="gray.100" mt={2}>
            Reference Number: {props.referenceNumber}
          </Text>
          <Divider mt={4} mb={4} borderColor="gray.500" />
          <Heading color="gray.100" size="md">
            Price:&nbsp;
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(
              props.price,
            )}
          </Heading>
          <Heading color="gray.100" size="md">
            Status: {getStatus(props.owned, props.price)}
          </Heading>
          <Box mt={2}>
            <Link color="purple.300">
              <a href={props.externalURL} target="_blank">
                Official page
              </a>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default WatchCardDetail;
