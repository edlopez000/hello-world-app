import React, { useState } from 'react';
import { RiEmotionLaughLine } from 'react-icons/ri';
import { Box, HStack, Text } from '@chakra-ui/react';

export default function JokeRating({ totalLaughs }) {
  const Laugh = ({ selected = false, onSelect = (f) => f }) => {
    return (
      <RiEmotionLaughLine
        size="50px"
        color={selected ? 'gold' : 'grey'}
        onClick={onSelect}
      />
    );
  };

  const createArray = (length) => [...Array(length)];

  const [selectedLaughs, setSelectedLaughs] = useState(0);

  return (
    <Box>
      <Text textAlign="center">Rate the dad joke!</Text>
      <HStack>
        {createArray(totalLaughs).map((element, index) => (
          <Laugh
            key={index}
            selected={selectedLaughs > index}
            onSelect={() => setSelectedLaughs(index + 1)}
          />
        ))}
      </HStack>
      <Text textAlign="center">
        {selectedLaughs} out of {totalLaughs}
      </Text>
    </Box>
  );
}
