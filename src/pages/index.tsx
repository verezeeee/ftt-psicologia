import React, { useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useAuth, withAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <Flex
      style={{
        padding: 20,
        height: "100vh",
        width: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text color="#333" fontSize="2rem">
        Olá, {user.name}
      </Text>
    </Flex>
  );
}

export default withAuth(Dashboard);
