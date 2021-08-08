import Image from "next/image";
import { Box, Flex, Grid, Text, Center } from "@chakra-ui/react";
import type { GetAllClientsResponse } from "../../graphql/queries/getAllClients";

type ClientProps = GetAllClientsResponse;

export default function Clients(props: ClientProps) {
  return (
    <Box w="full">
      <Center>
        <Text textColor="white" fontFamily="heading" fontSize="2xl" mb="12">
          I wrote code used by
        </Text>
      </Center>
      <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap="16">
        {props.clients.map((client) => (
          <Flex
            key={client.id}
            justifyContent="center"
            alignItems="center"
            h="32"
          >
            <Box pos="relative" w="full" h="full">
              <Box
                pos="absolute"
                top="2"
                left="10"
                w="28"
                h="28"
                filter="blur(32px) saturate(4)"
              >
                <Image
                  src={client.backgroundImage.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Image
                src={client.backgroundImage.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <Flex
                justifyContent="center"
                alignItems="center"
                pos="relative"
                w="full"
                h="full"
                backdropFilter="blur(20px)"
                p="8"
              >
                <Image
                  src={client.logo.url}
                  layout="fixed"
                  width={80}
                  height={80}
                  objectFit="contain"
                  objectPosition="center"
                />
              </Flex>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
