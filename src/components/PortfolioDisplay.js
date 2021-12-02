import React from 'react';
import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  Grid,
  Text,
} from '@chakra-ui/react';

export default function PortfolioDisplay({ project }) {
  return (
    <Box>
      <Heading>{project.projectTitle}</Heading>
    </Box>
  );
}
