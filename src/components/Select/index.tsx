import {
  Flex,
  Text,
  Input as ChakraInput,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import React from "react";
import { IMaskInput } from "react-imask";

export default function Select({
  label,
  options,
  value,
  setValue,
}: {
  options: string[];
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Flex flexDir="column" w="100%" my="1">
      <Text color="#767474" fontSize="1.2rem">
        {label}
      </Text>
      <ChakraSelect
        mt="2"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        borderRadius={12}
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
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </ChakraSelect>
    </Flex>
  );
}
