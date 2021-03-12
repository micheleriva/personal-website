import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

const getYouTubeData = async (api) => {
  const res = await fetch(`/api/youtube/${api}`);
  return res.json();
};

function YouTube() {
  const [videos, setVideos] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(async () => {
    setVideos(await getYouTubeData('videos'));
    setStats(await getYouTubeData('stats'));
  }, []);

  return (
    <Heading mb="2rem">
      <span role="image">📽</span> My YouTube Adventure
    </Heading>
  );
}

export default YouTube;
