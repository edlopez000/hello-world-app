import { Box, Center, Heading, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

export default function Contact() {
  return (
    <Box>
      <Center>
        <Heading>Contact</Heading>
      </Center>
      <Box mx="50">
        <Input mb="5" isRequired="true" placeholder="Name" />
        <Input mb="5" placeholder="Email" />
        <Input mb="5" placeholder="Phone" />
        <Textarea mb="5" placeholder="Message" />
      </Box>
    </Box>
  );
}
