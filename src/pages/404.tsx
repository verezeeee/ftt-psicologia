import { Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const toast = useToast();

  return (
    <Flex
      flexDir="column"
      maxH="90vh"
      overflow="hidden"
      align="center"
      justify="center"
      h="100vh"
      w="100%"
      px="8"
    >
      <Text color="#C760EB" fontSize="8rem" fontWeight={700}>
        404
      </Text>

      <Flex flexDir="column" mt={-10}>
        <Text
          color="#C760EB"
          textAlign="center"
          fontSize="2rem"
          fontWeight={800}
        >
          Whoops, parece que essa página não existe!
        </Text>
        <Text color="#C760EB" textAlign="center" fontSize="1.5rem">
          Mas você sim, e você é incrível
        </Text>
        <Button
          label="Voltar para a página inicial"
          onPress={() => {
            toast({
              position: "bottom-right",
              description: "Você foi direcionado para a página inicial",
              status: "warning",
              duration: 500,
            });
            router.push("/");
          }}
        />
      </Flex>
    </Flex>
  );
}
