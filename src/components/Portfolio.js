import { Box, Center, Heading, List, ListItem, Grid } from '@chakra-ui/react';
import React from 'react';
import { projects } from '../static/projects';
import PortfolioDisplay from './PortfolioDisplay';

export default function Portfolio() {
  return (
    <Box>
      <Center>
        <Heading>Portfolio</Heading>
      </Center>
      <Grid templateColumns="repeat(2, 1fr)">
        <Box px="5">
          <List>
            <ListItem>
              {projects.map((item) => {
                return (
                  <>
                    <Box key={item.projectTitle}>
                      <Heading as="h2" py="5">
                        {item.projectTitle}
                      </Heading>
                    </Box>
                  </>
                );
              })}
            </ListItem>
          </List>
        </Box>
        <Box px="5">
          <PortfolioDisplay />
        </Box>
      </Grid>
    </Box>
  );
}
