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
  const [showJoke, setShowJoke] = useState(false);

  const handleJoke = () => {
    setShowJoke(!showJoke);
  };

  const fetchJoke = async () => {
    const url = 'https://icanhazdadjoke.com/';

    try {
      let res = await fetch(url, {
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();
      const joke = json.joke;
      setDadJoke(joke);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDadJoke(fetchJoke());
  }, []);

  return (
    <Box>
      <VStack>
        <Center>
          <Heading>Home</Heading>
        </Center>
        <HStack>
          <Button onClick={handleJoke}>Show Dad Joke</Button>
          <Button>
            <RepeatIcon onClick={fetchJoke} />
          </Button>
        </HStack>
        {showJoke && <Text>{dadJoke}</Text>}
      </VStack>
    </Box>
  );
}
