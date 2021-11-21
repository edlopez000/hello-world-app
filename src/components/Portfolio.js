import { Box, Center, Heading, List, ListItem, Text } from '@chakra-ui/react';
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
              return <Text key={item.projectTitle}>{item.projectTitle}</Text>;
            })}
          </ListItem>
        </List>
      </Center>
    </Box>
  );
}
