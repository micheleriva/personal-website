import { Grid, GridItem, Box } from '@chakra-ui/react';
import socialData from '../data/social';

function Social() {
  return (
    <Grid gridTemplateColumns="repeat(5, 1fr)" gap={5}>
      {socialData.map((social) => (
        <GridItem key={social.name}>
          <Box w="50px" h="50px">
            <a href={social.url} target="_blank">
              <img src={`/icons/${social.name.toLowerCase()}.svg`} alt={social} />
            </a>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default Social;
