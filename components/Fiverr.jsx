import {
  Heading,
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Button,
  Flex,
  Grid,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.400')} fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          <Link href="https://www.fiverr.com/micheleriva_?up_rollout=true" target="_blank">
            {' '}
            {title}{' '}
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Fiverr() {
  return (
    <>
      <Heading> Coaching and mentorship </Heading>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}>
        <Text fontSize={{ base: 'md', md: 'md' }} textAlign={'center'} maxW={'3xl'}>
          "It was a life-changer experience for me with Michele. He asked pressing questions for me
          to ponder about myself and my goals and provided very pertinent and concrete guidelines
          for me to reach what I want and need. Every question/problem I raised was also answered
          with clarity and out-of-the-box solutions. He definitely has great experience and knows
          how to coach people especially on how to enter the tech industry. He also shared his
          vision and passion with me which motivated me a lot. I really appreciate that he is doing
          his best to offer his skills and experience to help people."
        </Text>
        <Box textAlign={'center'}>
          <Avatar src={'/placeholder_user.png'} alt={'bellalin305'} mb={2} />

          <Text fontWeight={600}>bellalin305</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
            <Link
              href="https://www.fiverr.com/micheleriva_/do-tech-career-consulting"
              target="_blank">
              Read on Fiverr
            </Link>
          </Text>
        </Box>
      </Stack>
      <Box>
        <Grid templateColumns={['1fr', '1fr 1fr 1fr']} gap={10}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Michele gave me many high-quality feedback and suggestions for both my upcoming
                interview and the overall career trajectory in software development. The interview
                was well-paced and covered both behavior and technical parts. I totally recommend
                his gig for anyone looking for preparing for the next interview.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/placeholder_user.png'}
              name={'kenhung'}
              title={'Read on Fiverr'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Michele is incredibly good at teaching functional programming. He provided clear
                explanations, answered all my questions, and checks to confirm I'm following his
                explanation at every step.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/placeholder_user.png'}
              name={'friendlyfreddie'}
              title={'Read on Fiverr'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                The quality of feedback I received is top-notch. I would consider this an absolute
                must-buy for anyone looking to apply for new development jobs. The interview was
                very enjoyable and incredibly helpful, and now I have notes on what I should brush
                up on in order to leave a positive impression during an interview. This is someone
                who wants to see others succeed.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/placeholder_user.png'}
              name={'jcvoyager'}
              title={'Read on Fiverr'}
            />
          </Testimonial>
        </Grid>
        <Flex mt={10} justifyContent="center" alignItems="center">
          <Button colorScheme="whatsapp"> Book an appointment </Button>
        </Flex>
      </Box>
    </>
  );
}
