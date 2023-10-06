import { Flex, Modal, TableProps, Text } from "@chakra-ui/react";
import { User, AlunoSignUpData } from "../../../utils/types";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Table from "../../../components/Tables";
import Search from "../../../components/Search";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import { IoMdPersonAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { removeAcentos } from "../../../utils/removeAcentos";
import Cadastrar from "../components/Cadastrar";
import Editar from "../components/Editar";
import axios from "axios";

export default function Alunos({
  user,
  activeTab,
}: {
  user: AlunoSignUpData;
  activeTab?: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");
  async function getUsers(): Promise<AlunoSignUpData[]> {	
    const res = await axios.get('http://localhost:8080/auth/getAlunos')
    const data = await res.data
    return data
  }
  

  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<AlunoSignUpData[]>();
  const [shouldFetchData, setShouldFetchData] = useState<boolean>(true);
  const finalRef = useRef(null);
  const initialRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setResult(data);
      setShouldFetchData(false);
    }
    if (shouldFetchData) {
      fetchData();
    } 
  }, [shouldFetchData]);

  

  function pesquisar(searchTerm: string, users: AlunoSignUpData[]): AlunoSignUpData[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return users.filter((user: AlunoSignUpData) => {
      const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
      return (
        lowerCaseNome.includes(lowerCaseSearchTerm)
      );
    });
  }

  useEffect(() => {
    async function fetchData() {
      if (searchTerm.length > 0) {
        const result = pesquisar(searchTerm, await getUsers());
        setResult(result);
      } else {
        setResult(await getUsers());
      }
    }
    fetchData();
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
          headers={["Nome", "Email", "CPF", "Período",]}
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
  