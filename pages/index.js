import { Button } from '@chakra-ui/react';
import { Heading, Divider } from '@chakra-ui/react';
import Bio from '../components/Bio';
import Featured from '../components/Featured';

export function getStaticProps() {
  return {
    props: {}
  }
}

function Home() {
  return (
    <>
      <Heading size='xl' mb='1rem'> 👋 Hey there! I'm Michele. </Heading>
      <Bio />
      <Divider mt='2rem' mb='2rem' />
      <Featured />
    </>
  );
}

export default Home;
