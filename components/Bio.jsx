import { useState } from 'react';
import { Box, Container, Button, Link as ChackraLink } from '@chakra-ui/react';

function Bio() {
  const [bioLength, setBioLength] = useState('short');

  const toggleBioLength = () => setBioLength(bioLength === 'short' ? 'long' : 'short');

  const containerProps = {
    style: {
      margin: 0,
      padding: 0,
      paddingBottom: '1rem',
    },
  };

  return (
    <Box>
      <Container {...containerProps}>
        I’m a passionate and experienced software engineer from Milan, Italy. I’ve been working as a
        software engineer for 7+ years in both product and consultancy companies, taking the best
        from both worlds.
      </Container>
      {bioLength === 'long' && (
        <>
          <Container {...containerProps}>
            During the last years, I have contributed to a lot of open source projects from
            companies and foundations such as <b>Facebook</b>, <b>Uber</b>, <b>Maserati</b>,{' '}
            <b>Apache Foundation</b>, <b>Linux Foundation</b>, and so on. <br />
            I’ve also written dozens of public domain articles about computer science, performance
            enhancements, scalability, clean code, and many other topics. You can find them here:{' '}
            <b>
              <ChackraLink
                href="https://www.hackdoor.io/users/micheleriva"
                color="blue.500"
                isExternal>
                www.hackdoor.io/users/micheleriva
              </ChackraLink>
            </b>
            .
          </Container>

          <Container {...containerProps}>
            I’m a fast learner. I love to learn new programming languages and paradigms to build
            high-quality software with them.
          </Container>

          <Container {...containerProps}>
            I’m currently coding in Node.js, TypeScript, Go, and Elixir, but I’d love to learn other
            programming languages to write programs in. In the past years, I’ve also had the
            opportunity to code in PHP, Ruby, Python, and other languages.
          </Container>

          <Container {...containerProps}>
            I also like to write frontend applications using React, Vue, Svelte, or just vanilla JS
            and CSS.
          </Container>
        </>
      )}
      <Container {...containerProps}>
        I’m currently working as a <b>Senior Software Engineer</b> at{' '}
        <b>
          <ChackraLink href="https://www.viacomcbs.com" color="blue.500" isExternal>
            ViacomCBS
          </ChackraLink>
        </b>
        , where I’m building a multi-tenant Node.js SSR/React application at the heart of our
        streaming websites and networks.
      </Container>
      <Button onClick={toggleBioLength}> {bioLength === 'short' ? 'Long' : 'Short'} bio </Button>
    </Box>
  );
}

export default Bio;
