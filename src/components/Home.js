import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [dadJoke, setDadJoke] = useState([]);
  const [showJoke, toggleShowJoke] = useState(false);

  const handleJoke = () => {
    toggleShowJoke(!showJoke);
  };

  const fetchJoke = () => {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json().then((result) => setDadJoke(result)));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const changeJoke = () => {
    fetchJoke();
    console.log(dadJoke);
  };

  return (
    <Box>
      <VStack>
        <Center>
          <Heading>Home</Heading>
        </Center>
        <HStack>
          <Button onClick={handleJoke}>Show Dad Joke</Button>
          <Button>
            <RepeatIcon onClick={() => changeJoke()} />
          </Button>
        </HStack>
        {showJoke && <Text>{dadJoke.joke}</Text>}
      </VStack>
    </Box>
  );
}
