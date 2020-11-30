import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  Divider,
  Grid,
  GridItem,
  Tag,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Resume(props) {
  return (
    <>
      {props.data.jobs.map((job, i) => (
        <Box
          key={job.company}
          p="1rem"
          border="1px"
          borderColor="gray.300"
          borderRadius={10}
          mb="1rem">
          <Heading size="md" color="blue.600">
            {job.company} ·{' '}
            <Text as="span" color="gray.500">
              {job.role}
            </Text>
          </Heading>
          <Heading size="s" color="gray.400">
            {job.date}
          </Heading>

          <List spacing={3} pt="1rem">
            {job.description.map((desc) => (
              <ListItem key={desc}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <span dangerouslySetInnerHTML={{ __html: desc }}></span>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </>
  );
}

export default Resume;
