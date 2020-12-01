import { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Tag, Flex } from '@chakra-ui/react';

function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [trackInterval, setTrackInterval] = useState(null);

  const isPlaying = track?.isPlaying;

  const getCurrentTrack = () => {
    fetch('/api/now-playing')
      .then((data) => data.json())
      .then((data) => setTrack(data.track))
      .catch(console.log);
  };

  useEffect(() => {
    getCurrentTrack();
    const interval = setInterval(getCurrentTrack, 5 * 1000); // 5 seconds
    setTrackInterval(interval);

    return () => clearInterval(trackInterval);
  }, []);

  if (track) {
    return (
      <Box
        p="1rem"
        border="1px"
        borderColor="gray.300"
        borderRadius={10}
        width={400}
        maxWidth="100%"
        key={track.cover}>
        <Grid gridTemplateColumns="100px 1fr">
          <GridItem>
            <a href={track.songUrl} target="_blank">
              <img
                src={track.cover}
                alt={isPlaying ? track.title : 'Know the meme.'}
                width={100}
                style={{ borderRadius: 10 }}
              />
            </a>
          </GridItem>
          <GridItem marginLeft="1rem">
            <Flex flexDir="column" justifyContent="center" height="100%">
              <Heading size="md"> {isPlaying ? track.title : 'Not Playing'} </Heading>
              <Heading size="s" color="gray.600">
                {isPlaying ? track.artist : "Maybe I'm in a meeting."}
              </Heading>
              <Box>
                {isPlaying && (
                  <a href={track.songUrl} target="_blank">
                    <Tag colorScheme="green" mt="0.5rem">
                      Listen on Spotify
                    </Tag>
                  </a>
                )}
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  return null;
}

export default NowPlaying;
