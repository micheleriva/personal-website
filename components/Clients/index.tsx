import { Box, Flex, Grid, Text, Image, Center } from "@chakra-ui/react";
import type { GetAllClientsResponse } from "../../graphql/queries/getAllClients";

type ClientProps = GetAllClientsResponse;

export default function Clients(props: ClientProps) {
  return (
    <Box w="full">
      <Center>
        <Text fontFamily="heading" fontSize="2xl" mb="6" mt="12">
          {" "}
          I wrote code used by{" "}
        </Text>
      </Center>
      <Grid gridTemplateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]} gap="2">
        {props.clients.map((client) => (
          <Flex
            key={client.id}
            justifyContent="center"
            alignItems="center"
            p="8"
            h="48"
            transition="ease 0.5s"
            bgColor="purple.800"
            _hover={{ bgColor: "purple.500" }}
          >
            <Image
              src={client.logo.url}
              alt={client.name}
              w="28"
              opacity="0.9"
            />
          </Flex>
        ))}
        <Flex justifyContent="center" alignItems="center">
          ...and many more.
        </Flex>
      </Grid>
    </Box>
  );
}
