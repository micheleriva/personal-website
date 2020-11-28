import { Box, Heading, List, ListItem, ListIcon, Text, Divider, Grid, GridItem, Tag } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Resume(props) {
  return (
    <Grid templateColumns='65% 35%' gap='3rem'>
      <GridItem>
        {props.data.jobs.map((job) => (
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
      </GridItem>
      <GridItem>
        {props.data.skills.map((skill) => (
          <Box key={skill.name} mb='1rem'>
            <Heading size='md' mb='1rem'> { skill.name } </Heading>
            <Box mb='1rem'>
              {skill.items.map((item) => (<Tag mr='1rem' mb='1rem' key={item}>{item}</Tag>))}
            </Box>
            <Divider />
          </Box>
        ))}
      </GridItem>
    </Grid>
  );
}

export default Resume;
