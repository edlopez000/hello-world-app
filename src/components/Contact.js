import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  return (
    <Box>
      <Heading textAlign="center">Contact</Heading>
      <Box mx="50">
        <Input mb="5" isRequired="true" placeholder="Name" />
        <Input mb="5" isRequired="true" placeholder="Email" />
        <Input mb="5" placeholder="Phone" />
        <Textarea mb="5" isRequired placeholder="Message" />
        <Center>
          <IconButton
            display="flex"
            aria-label="Submit icon"
            icon={<BiMailSend />}
          ></IconButton>
        </Center>
      </Box>
    </Box>
  );
}
