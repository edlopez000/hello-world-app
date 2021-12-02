import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function PortfolioDisplay({ project }) {
  return (
    <Box>
      <Heading>{project.projectTitle}</Heading>
    </Box>
  );
}
