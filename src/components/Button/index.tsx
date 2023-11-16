import React from "react";
import { Button as ChakraButton, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function Button({
  onPress,
  label,
  mt,
  px,
  mb,
  bg,
  icon,
  filled,
  color,
  border,
  _hover,
  width,
  mx,
}: {
  onPress: () => void;
  label: string;
  mt?: number;
  px?: number;
  mb?: number;
  bg?: string;
  icon?: IconType;
  filled?: boolean;
  color?: any;
  border?: string;
  _hover?: any;
  width?: any;
  mx?:number;
}) {
  return (
    <ChakraButton
    borderRadius={5}
      bg={bg ? bg : filled ? "#C760EB" : "#FFF"}
      border={border ? border :"2px solid #C760EB"}
      _hover={_hover ? _hover : {
        backgroundColor: "#C760EB",
        opacity: 0.9,
        color: "#FFF",
        transition: "0.3s",
      }}
      px={px ? px : "4"}
      mt={mt ? mt : "6"}
      mb={mb ? mb : "0"}
      onClick={onPress}
      color={color ? color : filled ? "#FFF" : "#C760EB"}
      width={width ? width : ""}
      mx={mx ? mx : 0}

    >
      {icon && <Icon as={icon} fontSize="1.2rem" mr="4" />}
      <Text fontWeight={500}>{label}</Text>
    </ChakraButton>
  );
}
