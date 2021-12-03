import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function PortfolioDisplay({ project }) {
  return (
    <Box>
      <Text>{project.projectTitle}</Text>
      <Text>{project.purpose}</Text>
    </Box>
  );
}
