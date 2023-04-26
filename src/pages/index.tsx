import React from "react";
import { useAuth, withAuth } from "../contexts/AuthContext";
import Admin from "../routes/Admin/pages";
import { Flex, Text } from "@chakra-ui/react";

function Index() {
  const { user } = useAuth();

  return (
    <Flex w="100%">
      {/* {user.role === "admin" && <Admin />} */}
      {user.role === "admin" ? <Admin /> : <Text m="4">Em andamento...</Text>}
    </Flex>
  );
}

export default withAuth(Index);
