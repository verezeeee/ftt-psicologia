import React from "react";

import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <Flex
      style={{
        height: 50,
      }}
      maxW={400}
      px="6"
      align="center"
      w="100%"
      borderRadius="10"
      bg="#EEE"
    >
      <Icon as={BiSearch} color="purple" fontSize="1rem" />
    </Flex>
  );
}
