import React from "react";

import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useMediaQuery } from "../../utils/useMediaQuery";

export default function Search({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { mobile } = useMediaQuery();

  return (
    <Flex
      style={{
        height: 40,
      }}
      w={mobile ? "100%" : 400}
      px="4"
      border="2px solid #C760EB"
      align="center"
      borderRadius="10"
    >
      <Icon as={BiSearch} color="#C760EB" fontSize="1rem" />
      <Input
        borderRadius={12}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        w="100%"
        _focus={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        _active={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        _hover={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        style={{
          boxShadow: "none !important",
          outline: "none !important",
          border: "0px solid transparent !important",
        }}
        border="0px solid !important"
      />
    </Flex>
  );
}
