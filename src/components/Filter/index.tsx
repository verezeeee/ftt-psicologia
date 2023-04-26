import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BiFilter, BiFilterAlt } from "react-icons/bi";

export default function Filter() {
  return (
    <Flex>
      <Icon as={BiFilterAlt} color="#C760EB" fontSize="1.3rem" />
    </Flex>
  );
}
