import { Flex, Text, calc } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { signOut } = useAuth();

  return (
    <Flex
      justify="space-between"
      w="100%"
      px="4"
      left={300}
      style={{
        width: "calc(100vw - 300px)",
        height: 70,
      }}
      align="center"
      position="fixed"
      bg="#FFF"
      // boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 2px"
      borderBottom="1px solid #EEE"
    >
      <Text color="#333" fontSize="1.4rem">
        Psicare
      </Text>
      <Button mt={0.1} px={6} label="Sair" onPress={signOut} />
    </Flex>
  );
}
