import { Box, Center, Heading, Text, Button, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [dadJoke, setDadJoke] = useState([]);
  const [showJoke, toggleShowJoke] = useState(false);

  const handleJoke = () => {
    toggleShowJoke(!showJoke);
  };

  useEffect(() => {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json().then((result) => setDadJoke(result)));
  }, []);

  return (
    <Box>
      <VStack>
        <Center>
          <Heading>Home</Heading>
        </Center>
        <Button onClick={handleJoke}>Show Dad Joke</Button>
        {showJoke && <Text>{dadJoke.joke}</Text>}
      </VStack>
    </Box>
  );
}
