import Image from "next/image";
import type { GetStaticProps } from "next";
import { useState } from "react";
import {
  Box,
  Center,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  Divider,
  Grid,
  Tag,
} from "@chakra-ui/react";
import client from "../graphql";
import {
  GET_ALL_WATCHES,
  GetAllWatchesResponse,
  Watch,
} from "../graphql/queries/getAllWatches";
import PageContainer from "../components/PageContainer";
import WatchSchede from "../components/WatchSchede";

export type WatchesProps = {
  watches: GetAllWatchesResponse;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetAllWatchesResponse>({
    query: GET_ALL_WATCHES,
  });

  return {
    props: {
      watches: data,
    },
  };
};

export default function Watches({ watches }: WatchesProps) {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleWatchSelect = (watch: Watch) => {
    setSelectedWatch(watch);
    onOpen();
  };

  const getCollectionStatus = (price: number) => {
    switch (true) {
      case price <= 2000:
        return <Tag colorScheme="yellow"> Will buy in the future </Tag>;
      case price <= 10000:
        return <Tag colorScheme="orange"> On my shopping radar </Tag>;
      default:
        return <Tag colorScheme="red"> Will never afford </Tag>;
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody bgColor="gray.600" p="0">
            <Box>
              <Box overflow="hidden" pos="relative" w="full">
                <Box
                  pos="absolute"
                  w="full"
                  h="full"
                  top="0"
                  filter="blur(25px) saturate(1.2)"
                  transform="scale(1.5)"
                >
                  <Image
                    src={selectedWatch?.image.url}
                    layout="fill"
                    objectFit="cover"
                    quality={25}
                  />
                </Box>
                <Box pos="relative" w="80" h="container.sm">
                  <Image
                    src={selectedWatch?.image.url}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Box>
              <Box
                pos="absolute"
                top="8"
                right="8"
                zIndex="1"
                p="4"
                w="lg"
                textColor="gray.100"
                bgColor="blackAlpha.500"
              >
                <ModalCloseButton textColor="white" />
                <Text lineHeight="42px" fontSize="5xl" fontWeight="bold">
                  {" "}
                  {selectedWatch?.watchManufacturer.name}{" "}
                </Text>
                <Text lineHeight="42px" fontSize="4xl">
                  {" "}
                  {selectedWatch?.model}{" "}
                </Text>
                <Text lineHeight="tall" fontSize="sm">
                  {" "}
                  Reference {selectedWatch?.referenceNumber}{" "}
                </Text>
                <Box mt="4">
                  {selectedWatch?.owned ? (
                    <Tag size="sm" variant="solid" colorScheme="green">
                      {" "}
                      Owned{" "}
                    </Tag>
                  ) : (
                    getCollectionStatus(selectedWatch?.price)
                  )}
                </Box>
                <Divider mt="4" mb="4" />
                <Text> Price: €{selectedWatch?.price.toLocaleString()} </Text>
                <Text> Personal rating: {selectedWatch?.rating}% </Text>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Center textColor="whiteAlpha.800" pt="48" pb="24">
        <PageContainer>
          <Text as="h1" fontSize="4xl" fontWeight="bold">
            My (mostly imaginary) watch collection
          </Text>
          <Text mt="4">
            I've always been fascinated by watches. It's incredible how a
            mechanical movement, without any electronic component, can tell the
            time, day of the week or month, detect leap years, and lunar phases.
            It's an absolute miracle of engineering and beauty. Looking at the
            following watches, to me, it's like looking at a Michelangelo
            sculpture.
            <br />
            <b>
              I don't own the following watches, except for a couple of them
              (cheap ones).
            </b>
          </Text>
          <Text mt="4">
            Collection worth: €
            {watches.watches
              .reduce((acc, watch) => acc + watch.price, 0)
              .toLocaleString()}
          </Text>

          <Grid gridTemplateColumns={"repeat(4, 1fr)"} mt="14" gap="12">
            {watches.watches.map((watch) => (
              <WatchSchede
                key={watch.id}
                watch={watch}
                onClick={handleWatchSelect}
              />
            ))}
          </Grid>
        </PageContainer>
      </Center>
    </>
  );
}
