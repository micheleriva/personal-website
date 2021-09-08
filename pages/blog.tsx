import Image from "next/image";
import {
  Box,
  Center,
  Image as ChakraImage,
  Grid,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import client from "../graphql";
import {
  GET_ALL_BLOG_POSTS,
  BlogPosts,
  BlogPost,
} from "../graphql/queries/getAllBlogPosts";
import PageContainer from "../components/PageContainer";

export async function getStaticProps() {
  const { data } = await client.query<BlogPosts>({
    query: GET_ALL_BLOG_POSTS,
  });

  return {
    props: {
      posts: data.blogPosts,
    },
  };
}

function getPublisherImage(name) {
  switch (name) {
    case "Towards Data Science":
      return ["/imgs/publications/tds.png", "24"];
    case "FreeCodeCamp":
      return ["/imgs/publications/fcc.png", "40"];
  }
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const featuredPostsIDs = [
    "ckta0ttqw1dye0b53k1ilwvap",
    "ckta2mshc0ozo0d62zkvhvssh",
    "ckta1176g09js0c52x2ktjo0v",
    "ckta13gyw3e200d50xlik143j",
    "ckta1cd6o1p9m0b532lkh9ih5",
    "ckta2mshc0ozo0d62zkvhvssh",
  ];
  const featured = posts.filter((post) => featuredPostsIDs.includes(post.id));

  return (
    <Box textColor="gray.50" pt={["24", "24", "48"]}>
      <Center>
        <PageContainer>
          <Text as="h1" fontSize={["4xl", "6xl"]} fontWeight="bold">
            My public domain articles.
          </Text>
          <Text as="p" mt="4" mb="10">
            During the last years, I wrote {posts.length} public domain
            articles. I truly believe in sharing knowledge, as this helped me
            become a professional software developer in the first place.
          </Text>
        </PageContainer>
      </Center>

      <Box bgColor="gray.100" textColor="gray.800">
        <Center>
          <PageContainer>
            <Text as="h2" fontSize={["4xl", "6xl"]} fontWeight="bold" mt="10">
              Featured
            </Text>
            <Grid
              gridTemplateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
              gap="8"
              mb="20"
              mt="10"
            >
              {featured.map((post) => (
                <Box key={post.id} as="a" href={post.friendUrl} target="_blank">
                  <Box pos="relative" w="full" h="32">
                    <Image
                      src={post.image.url}
                      layout="fill"
                      objectFit="cover"
                    />
                    {post.publisher && (
                      <Box
                        pos="absolute"
                        top="0"
                        left="0"
                        bgColor="blackAlpha.500"
                        w="full"
                        h="full"
                      >
                        <Box pos="absolute" bottom="2" left="2">
                          <ChakraImage
                            src={getPublisherImage(post.publisher)[0]}
                            alt={post.publisher}
                            w={getPublisherImage(post.publisher)[1]}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                  <Box w="full" mt="4">
                    <Text as="h2" fontSize="lg" fontWeight="bold">
                      {post.title}
                    </Text>
                    <Text as="p" mt="2">
                      {post.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </PageContainer>
        </Center>
      </Box>

      <Center>
        <PageContainer>
          <Text as="h2" fontSize={["4xl", "6xl"]} fontWeight="bold" mt="10">
            All the articles
          </Text>
          <Grid
            gridTemplateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
            gap="8"
            mb="20"
            mt="10"
          >
            {posts.map((post) => (
              <Box
                key={post.id}
                as="a"
                href={post.friendUrl}
                target="_blank"
                bgColor="gray.800"
              >
                <Box pos="relative" w="full" h="36">
                  <Image src={post.image.url} layout="fill" objectFit="cover" />
                </Box>
                <Box p="4">
                  <Text as="span">
                    {" "}
                    {dayjs(post.publishDate).format("D MMM YYYY")}{" "}
                  </Text>
                  <Text
                    as="h2"
                    fontSize="2xl"
                    fontWeight="bold"
                    mt="2"
                    lineHeight="shorter"
                  >
                    {" "}
                    {post.title}{" "}
                  </Text>
                  <Text as="p" mt="2">
                    {" "}
                    {post.description}{" "}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </PageContainer>
      </Center>
    </Box>
  );
}
