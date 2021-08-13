import Image from "next/image";
import { Box, Flex, Text, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import type { Watch } from "../../graphql/queries/getAllWatches";

export type WatchSchedeProps = {
  watch: Watch;
  onClick: (watch: Watch) => void;
};

export default function WatchSchede({ watch, onClick }: WatchSchedeProps) {
  return (
    <Box pos="relative" overflow="hidden" cursor="pointer">
      <Box
        pos="absolute"
        filter="blur(25px) saturate(2)"
        w="96"
        h="96"
        transform="translate3D(-50px, -50px, 0)"
      >
        <Box pos="relative" w="full" h="full">
          <Image
            src={watch.image.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>

      <Box
        w="100%"
        h="60"
        bgColor="gray.800"
        rounded="lg"
        onClick={() => onClick(watch)}
      >
        <Flex pos="relative" w="100%" h="60">
          <Image
            src={watch.image.url}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
          <Box p="4">
            <Text fontSize="3xl" lineHeight="shorter" fontWeight="bold">
              {watch.watchManufacturer.name}
            </Text>
            <Text>{watch.model}</Text>
            {watch.owned && <Badge colorScheme="green">Owned</Badge>}
          </Box>
        </Flex>
        <Box pos="absolute" bottom="2" right="2">
          €{watch.price.toLocaleString("US")}
        </Box>
        <Flex pos="absolute" bottom="2" left="2" alignItems="center">
          <StarIcon color="yellow.100" mr="2" fontSize="sm" />
          {watch.rating}%
        </Flex>
      </Box>
    </Box>
  );
}
