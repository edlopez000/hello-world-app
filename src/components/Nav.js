import { Box, Divider, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Nav.css';

export default function Nav() {
  return (
    <Box className="nav-bar" mx="5">
      <Stack direction="row" justify="flex-end">
        <Link className="link" to="/">
          Home
        </Link>
        <Text className="link">|</Text>
        <Link className="link" to="/about">
          About
        </Link>
        <Text className="link">|</Text>
        <Link className="link" to="/portfolio">
          Portfolio
        </Link>
        <Text className="link">|</Text>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </Stack>
      <Divider />
    </Box>
  );
}
