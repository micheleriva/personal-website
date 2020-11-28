import { Button } from '@chakra-ui/react';
import Bio from '../components/Bio';

export function getStaticProps() {
  return {
    props: {}
  }
}

function Home() {
  return (
    <>
      <Bio />
    </>
  );
}

export default Home;
