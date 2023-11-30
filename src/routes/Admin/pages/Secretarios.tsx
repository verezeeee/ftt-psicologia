import { FC, useState, useEffect, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SecretarioSignUpData } from "../../../utils/types";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Table from "../../../components/Tables";
import Search from "../../../components/Search";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import { IoMdPersonAdd } from "react-icons/io";
import { removeAcentos } from "../../../utils/removeAcentos";
import Cadastrar from "../components/Cadastrar";
import Editar from "../components/Editar";
import axios from "axios";

interface SecretariosProps {
  user: SecretarioSignUpData;
  activeTab?: string;
}

const Secretarios: FC<SecretariosProps> = ({ user, activeTab }) => {
  const { mobile } = useMediaQuery();
  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<SecretarioSignUpData[]>([]);
  const [isEditing, setIsEditing] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<SecretarioSignUpData[]>("http://localhost:8080/auth/getSecretarios");
        setResult(res.data);
      } catch (error) {
        console.error("Erro ao obter os Secretários:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    function pesquisar(searchTerm: string, users: SecretarioSignUpData[]): SecretarioSignUpData[] {
      const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

      return users.filter((user: SecretarioSignUpData) => {
        const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
        return lowerCaseNome.includes(lowerCaseSearchTerm);
      });
    }

    if (searchTerm.length > 0) {
      const filteredResult = pesquisar(searchTerm, result);
      setResult(filteredResult);
    } else {
      setResult(result);
    }
  }, [searchTerm]);

  return (
    <Flex
      p="4"
      style={{
        marginLeft: mobile ? 0 : 300,
        marginTop: 80,
        padding: 20,
        width: mobile ? "100%" : "calc(100vw - 320px)",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text color="#333" fontSize="2rem" mr="4">
        Secretários
      </Text>
      {mobile && (
        <Button
          icon={IoMdPersonAdd}
          px={6}
          mt={2}
          onPress={() => {
            setCadastrarOpened(true);
          }}
          label="Novo cadastro"
        />
      )}
      <Flex mt="4" align="center" w="100%" justify="space-between">
        {!mobile && (
          <Button
            icon={IoMdPersonAdd}
            px={6}
            mt={0.1}
            onPress={() => {
            setCadastrarOpened(true);
            }}
            label="Novo cadastro"
          />
        )}
        <Flex align="center" w={mobile ? "100%" : "auto"}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Flex w={4} />
          <Filter />
        </Flex>
      </Flex>
      <Flex mt="4" w="100%">
        <Table
          headers={["Nome", "Email", "CPF", "Turno"]}
          data={result}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          type="secretario"
        />
      </Flex>
      <Cadastrar
        cadastrarOpened={cadastrarOpened}
        setCadastrarOpened={setCadastrarOpened}
      />
      <Editar
        role={isEditing?.role}
        editData={isEditing}
        editarOpened={isEditing ? true : false}
        setEditarOpened={setIsEditing}
      />
    </Flex>
  );
};

export default Secretarios;
