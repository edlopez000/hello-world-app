import { Box, Center, Heading, List, ListItem, Text } from '@chakra-ui/layout';
import React from 'react';
import json from '../static/projects.json';

export default function Portfolio() {
  return (
    <Box>
      <Center>
        <Heading>Portfolio</Heading>
      </Center>
      <Center>
        <List>
          <ListItem>
            {json.map((item) => {
              return <Text>{item.projectTitle}</Text>;
            })}
          </ListItem>
        </List>
      </Center>
    </Box>
  );
}
