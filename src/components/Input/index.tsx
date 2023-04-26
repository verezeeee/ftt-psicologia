import { Flex, Text, Input as ChakraInput } from "@chakra-ui/react";
import React from "react";
import { IMaskInput } from "react-imask";

export default function Input({
  label,
  value,
  setValue,
  mask,
}: {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  mask?: string;
}) {
  return (
    <Flex flexDir="column" w="100%" my="1">
      <Text color="#767474" fontSize="1.2rem">
        {label}
      </Text>
      <ChakraInput
        as={IMaskInput}
        mask={mask}
        borderRadius={12}
        mt="2"
        w="100%"
        _hover={{
          border: "2px solid #C760EB",
          outline: "none !important",
          boxShadow: "none !Important",
        }}
        _active={{
          border: "2px solid #C760EB",
          outline: "none !important",
          boxShadow: "none !Important",
        }}
        _focus={{
          border: "2px solid #C760EB",
          outline: "none !important",
          boxShadow: "none !Important",
        }}
        border="2px solid #C760EB"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
    </Flex>
  );
}
