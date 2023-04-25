import { Flex, Text } from "@chakra-ui/react";
import { User } from "../../utils/types";
import { useMediaQuery } from "../../utils/useMediaQuery";
import Table from "../../components/Tables";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
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
      p="4"
      style={{
        marginLeft: mobile ? 0 : 300,
        marginTop: 80,
        padding: 20,
        width: "calc(100vw - 320px)",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text color="#333" fontSize="2rem" mr="4">
        Secretários
      </Text>
      <Flex align="center" w="100%" justify="space-between">
        <Button onPress={() => {}} label="Novo cadastro" />
        <Flex align="center">
          <Search />
          <Filter />
        </Flex>
      </Flex>
      <Flex mt="4" w="100%">
        <Table
          headers={["ID", "Nome", "CPF", "Tratamento"]}
          data={[
            {
              id: "0",
              email: "ricardofsdomene@icloud.com",
              nome: "Ricardo Fonseca",
              role: "student",
              cpf: 37151994826,
            },
            {
              id: "1",
              email: "ricardofsdomene2@icloud.com",
              nome: "Ricardo Domene",
              role: "student",
              cpf: 83798497335,
            },
            {
              id: "2",
              email: "ricardofsdomene3@icloud.com",
              nome: "Ricardo Tech",
              role: "student",
              cpf: 92859283859,
            },
            {
              id: "3",
              email: "ricardofsdomene4@icloud.com",
              nome: "Ricardo Sarti",
              role: "student",
              cpf: 83948683743,
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
