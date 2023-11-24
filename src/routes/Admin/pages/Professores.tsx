import { Flex, Text } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Table from "../../../components/Tables";
import Search from "../../../components/Search";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { removeAcentos } from "../../../utils/removeAcentos";
import Cadastrar from "../components/Cadastrar";
import Editar from "../components/Editar";
import { ProfessorSignUpData } from "../../../utils/types";

export default function Professores({
  user,
  activeTab,
}: {
  user: ProfessorSignUpData;
  activeTab?: string;
}) {
  const { mobile } = useMediaQuery();

  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<ProfessorSignUpData[]>([]);

  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<ProfessorSignUpData[]>([]);
  const shouldFetchData = useRef<boolean>(true);
  const finalRef = useRef(null);
  const initialRef = useRef(null);

  async function getUsers(): Promise<ProfessorSignUpData[]> {
    try {
      const res = await axios.get<ProfessorSignUpData[]>("http://localhost:8080/auth/getProfessores");
      const data = res.data;
      return data;
    } catch (error) {
      console.error("Erro ao obter os Professores:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (shouldFetchData.current) {
        const data = await getUsers();
        setResult(data);
        shouldFetchData.current = false;
      }

      if (searchTerm.length > 0) {
        const filteredResult = pesquisar(searchTerm, result);
        setResult(filteredResult);
      }
    }

    fetchData();
  }, [shouldFetchData, searchTerm]);

  function pesquisar(searchTerm: string, data: ProfessorSignUpData[]): ProfessorSignUpData[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return data.filter((user) => {
      const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
      return lowerCaseNome.includes(lowerCaseSearchTerm);
    });
  }

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
        Professores
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
          headers={["Nome", "CPF", "Telefone"]}
          data={result}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          type="professor"
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
