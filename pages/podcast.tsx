import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Collapse,
  useDisclosure,
  Tag,
  AspectRatio,
} from "@chakra-ui/react";
import client from "../graphql";
import {
  GET_PODCAST_SEASON,
  PodcastSeason,
  Episode,
} from "../graphql/queries/getPodcastSeason";
import PageContainer from "../components/PageContainer";
import inferenceBgImage from "../public/imgs/inference-bg.png";

type PodcastProps = {
  episodes: Episode[];
};

export async function getStaticProps() {
  const { data } = await client.query<PodcastSeason>({
    query: GET_PODCAST_SEASON,
  });

  return {
    props: {
      episodes: data.podcastEpisodes,
    },
  };
}

export default function Podcast({ episodes }: PodcastProps) {
  const [hoverEpisode, setHoverEpisode] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pos="relative" w="full" h="container.sm">
        <Image
          src={inferenceBgImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Center
          position="absolute"
          m="auto"
          w="full"
          h="full"
          textColor="gray.100"
          bgColor="blackAlpha.400"
        >
          <PageContainer>
            <Text as="h1" fontSize="6xl" fontWeight="bold">
              Inference Podcast
            </Text>
            <Text fontStyle="italic">
              Inference: a conclusion reached on the basis of evidence and
              reasoning
            </Text>
            <Text fontStyle="italic">
              Type inference: the ability to automatically deduce the type of an
              expression at compile time
            </Text>
          </PageContainer>
        </Center>
      </Box>
      <Center mt="-20" pb="24" textColor="gray.100">
        <PageContainer>
          <Grid
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "repeat(4, 1fr)"]}
            gap={["4", "6", "8"]}
          >
            {episodes.map((episode) => (
              <Box
                key={episode.id}
                w="full"
                minH={["xs", "sm", "sm"]}
                bg="gray.800"
                boxShadow="dark-lg"
                onMouseEnter={() => setHoverEpisode(episode.id)}
                onMouseLeave={() => setHoverEpisode(null)}
                onClick={() => {
                  setSelectedEpisode(episode);
                  onOpen();
                }}
                cursor="pointer"
              >
                <Box pos="relative" h="full">
                  <Image
                    src={episode.guestImage.url}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Flex
                    pos="absolute"
                    bgColor={
                      hoverEpisode === episode.id
                        ? "blackAlpha.800"
                        : "blackAlpha.500"
                    }
                    transition="ease 0.3s"
                    w="full"
                    h="full"
                    p="4"
                    alignItems="flex-end"
                    flexDir="row"
                  >
                    <Box>
                      <Text> Episode {episode.episodeNumber} </Text>
                      <Text
                        fontSize={["md", "xl", "xl"]}
                        fontWeight="bold"
                        lineHeight="shorter"
                      >
                        {episode.title}
                      </Text>
                      <Collapse
                        startingHeight={0}
                        in={hoverEpisode === episode.id}
                      >
                        <Text lineHeight="shorter" mt="2">
                          {episode.episodeDescription.substr(0, 140)}...
                        </Text>
                      </Collapse>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        </PageContainer>
      </Center>

      <Modal onClose={onClose} size="6xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalCloseButton textColor="gray.100" />
          <ModalBody textColor="gray.100" p="12">
            <Grid gridTemplateColumns={["1fr", "1fr", "250px 1fr"]} gap="8">
              <Box pos="relative" w="full" h="xs">
                <Image
                  src={selectedEpisode?.guestImage.url}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box>
                <Text fontSize="2xl" lineHeight="shorter">
                  Season {selectedEpisode?.season},
                  <Text as="span" textColor="gray.500">
                    {" "}
                    episode {selectedEpisode?.episodeNumber}
                  </Text>
                </Text>
                <Text fontWeight="bold" fontSize="4xl" lineHeight="shorter">
                  {selectedEpisode?.title}
                </Text>
                <Text mt="2">{selectedEpisode?.episodeDescription}</Text>

                <Box mt="4" mb="4">
                  <iframe
                    src={selectedEpisode?.anchorfmEmbed}
                    height="102px"
                    width="400px"
                    frameBorder="0"
                    scrolling="no"
                  />
                </Box>
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}