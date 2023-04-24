import React from "react";
import { useAuth, withAuth } from "../contexts/AuthContext";
import Admin from "../routes/Admin";
import { Text } from "@chakra-ui/react";

function Index() {
  const { user } = useAuth();

  return (
    <>
      {/* {user.role === "admin" && <Admin />} */}
      {user.role === "admin" ? <Admin /> : <Text m="4">Em andamento...</Text>}
    </>
  );
}

export default withAuth(Index);
