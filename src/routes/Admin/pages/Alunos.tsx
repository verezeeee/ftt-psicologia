import { Flex, Text } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Table from "../../../components/Tables";
import Search from "../../../components/Search";
import Button from "../../../components/Button";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { removeAcentos } from "../../../utils/removeAcentos";
import Cadastrar from "../components/Cadastrar";
import Editar from "../components/Editar";
import { AlunoSignUpData } from "../../../utils/types";
import Filter from "../../../components/Filter";

export default function Alunos({
  user,
  activeTab,
}: {
  user: AlunoSignUpData;
  activeTab?: string;
}) {
  const { mobile } = useMediaQuery();

  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [originalData, setOriginalData] = useState<AlunoSignUpData[]>([]);
  const [result, setResult] = useState<AlunoSignUpData[]>([]);
  const [isEditing, setIsEditing] = useState<any>();
  const shouldFetchData = useRef<boolean>(true);

  async function getUsers(): Promise<AlunoSignUpData[]> {
    try {
      const res = await axios.get<AlunoSignUpData[]>("http://localhost:8080/auth/getAlunos");
      const data = res.data;
      return data;
    } catch (error) {
      console.error("Erro ao obter os Alunos:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (shouldFetchData.current) {
        const data = await getUsers();
        setOriginalData(data);
        setResult(data);
        shouldFetchData.current = false;
      }
    }

    fetchData();
  }, [shouldFetchData]);

  function pesquisar(searchTerm: string, users: AlunoSignUpData[]): AlunoSignUpData[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return users.filter((user: AlunoSignUpData) => {
      const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
      return lowerCaseNome.includes(lowerCaseSearchTerm);
    });
  }

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredResult = pesquisar(searchTerm, originalData);
      setResult(filteredResult);
    } else {
      setResult(originalData);
    }
  }, [searchTerm, originalData]);
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
        Alunos
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
          headers={["Nome", "Email", "CPF", "Período"]}
          data={result}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          type="aluno"
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
}
