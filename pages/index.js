import { Button } from '@chakra-ui/react';
import { Heading, Divider } from '@chakra-ui/react';
import Bio from '../components/Bio';
import Featured from '../components/Featured';
import NowPlaying from '../components/NowPlaying';

export function getStaticProps() {
  return {
    props: {},
  };
}

function Home() {
  return (
    <>
      <Heading size="xl" mb="1rem">
        <span role="img">👋</span> Hey there! I'm Michele.
      </Heading>
      <Bio />
      <Divider mt="2rem" mb="2rem" />
      <Featured />
      <Divider mt="2rem" mb="2rem" />
      <Heading size="xl" mb="1rem">
        I'm currently listening
      </Heading>
      <NowPlaying />
    </>
  );
}

export default Home;
