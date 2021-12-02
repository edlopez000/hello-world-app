import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  Grid,
  Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { projects } from '../static/projects';
import PortfolioDisplay from './PortfolioDisplay';

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState([]);

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
                      <Link onClick={() => setCurrentProject(item)}>
                        <Heading as="h2" py="5">
                          {item.projectTitle}
                        </Heading>
                      </Link>
                    </Box>
                  </>
                );
              })}
            </ListItem>
          </List>
        </Box>
        <Box px="5">
          <PortfolioDisplay project={currentProject} />
        </Box>
      </Grid>
    </Box>
  );
}
