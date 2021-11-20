import { Box, Divider, Stack } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Box className="nav-bar" mx="5">
      <Stack direction="row" justify="flex-end">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </Stack>
      <Divider />
    </Box>
  );
}
