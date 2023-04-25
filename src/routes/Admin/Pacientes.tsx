import { Flex, Text } from "@chakra-ui/react";
import { User } from "../../utils/types";
import { useMediaQuery } from "../../utils/useMediaQuery";
export default function Pacientes({
  user,
  activeTab,
}: {
  user: User;
  activeTab?: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <Flex
      style={{
        marginLeft: mobile ? 0 : 300,
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
