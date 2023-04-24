import { Flex, Text } from "@chakra-ui/react";
import { User } from "../../utils/types";

export default function Pacientes({
  user,
  activeTab,
}: {
  user: User;
  activeTab?: string;
}) {
  return (
    <Flex
      style={{
        marginLeft: 300,
        marginTop: 70,
        padding: 20,
        height: 2000,
        width: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text color="#333" fontSize="2rem">
        Pacientes
      </Text>
    </Flex>
  );
}
