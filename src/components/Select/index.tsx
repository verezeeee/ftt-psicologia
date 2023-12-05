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
  disabled,
  border,
}: {
  options: any;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  border?: any;
}) {
  return (
    <Flex flexDir="column" w="100%" my="1">
      <Text color="#767474" fontSize="1.2rem">
        {label}
      </Text>
      <ChakraSelect
        disabled={disabled}
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
        border={border ? border : "2px solid #C760EB"}
      >
        {Array.isArray(options) &&
          options.map((option, i) => {
            const optionLabel = typeof option === "object" ? option.label : option;
            const optionValue = typeof option === "object" ? option.value : option;

            return (
              <option key={i} value={optionValue}>
                {optionLabel}
              </option>
            );
          })
        }
      </ChakraSelect>
    </Flex>
  );
}
