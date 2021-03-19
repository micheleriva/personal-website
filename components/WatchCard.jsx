import { useContext } from 'react';
import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import watchGalleryContext from '../components/context/watchGalleryContext';

function WatchCard(props) {
  const { setCurrent } = useContext(watchGalleryContext);

  return (
    <Box
      onClick={() => setCurrent(props.id)}
      overflow="hidden"
      position="relative"
      bgColor="gray.900"
      h={200}
      w="100%"
      borderRadius={5}
      cursor="pointer">
      <Flex>
        <Image src={props.images[0].url} alt={props.model} layout="fill" objectFit="contain" />
        <Box p={3}>
          <Heading color="gray.400" size="lg">
            {props.brand}
          </Heading>
          <Heading color="gray.700" size="lg">
            {props.model}
          </Heading>
          <Box position="absolute" bottom={1} right={1} backgroundColor="gray.900" p={1}>
            {props.showPrice && (
              <Flex justifyContent="flex-end">
                <Text color="gray.100">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(
                    props.price,
                  )}
                </Text>
              </Flex>
            )}
            <Flex justifyContent="flex-end">
              <StarIcon w={3} h={3} color="yellow.100" marginTop={1} marginRight={1} />
              <Text color="gray.100"> {props.rating}% </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default WatchCard;
