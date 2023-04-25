import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BiFilter } from "react-icons/bi";

export default function Filter() {
  return (
    <Flex>
      <Icon as={BiFilter} color="purple" fontSize="1.3rem" />
    </Flex>
  );
}
