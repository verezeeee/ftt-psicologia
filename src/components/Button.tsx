import React from "react";
import { Button as ChakraButton, Text } from "@chakra-ui/react";

export default function Button({
  onPress,
  label,
  mt,
  px,
  mb,
  bg
}: {
  onPress: () => void;
  label: string;
  mt?: number;
  px?: number;
  mb?: number
  bg?: string
}) {
  return (
    <ChakraButton
      bg={bg ? bg :  "#FFF"}
      border="1px solid #D5B8FF"
      boxShadow="rgba(199, 96, 235, 0.2) 0 0 10px"
      _hover={{
        backgroundColor: "#C760EB",
        opacity: 0.8,
        color: "#FFF",
        transition: "0.3s",
      }}
      px={px ? px : "4"}
      mt={mt ? mt : "6"}
      mb={mb ? mb : "0"}
      onClick={onPress}
      color="#C760EB"
    >
      <Text fontWeight={500}>{label}</Text>
    </ChakraButton>
  );
}
