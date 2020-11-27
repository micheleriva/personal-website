import { Box, Heading, List, ListItem, ListIcon, Text, Divider } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Resume(props) {
  return (
    <Box>
      {props.data.map((job) => (
        <Box key={job.company} pb="1rem">
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
          <Divider mt="1rem" />
        </Box>
      ))}
    </Box>
  );
}

export default Resume;
