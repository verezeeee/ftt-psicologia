import { Avatar, Flex, Text } from "@chakra-ui/react";
import { User } from "../../utils/types";

export default function Greeting({ user} : { user: User; }) {
    return (
      <Flex cursor="default" align="center" borderRadius="10" mb="2" py="2">
        <Flex align="center" px="2">
          <Avatar name={user.nome} size="sm" />
          <Text ml="3" color="#333" fontSize="1rem">
            Olá, {user.nome}
          </Text>
        </Flex>
      </Flex>
    );
  }
