import { Flex, Modal, Text } from "@chakra-ui/react";
import { User } from "../../../utils/types";
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

export default function Professores({
  user,
  activeTab,
}: {
  user: User;
  activeTab?: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<User[]>([
    {
      id: "1",
      nome: "Fulano de Tal",
      cpf: 12345678900,
      role: "professor",
      disciplinaMinistrada: "Matemática",
      email: "fulano@example.com",
      telefone: 11987654321,
    },
    {
      id: "2",
      nome: "Beltrano da Silva",
      cpf: 98765432100,
      role: "professor",
      disciplinaMinistrada: "Português",
      email: "beltrano@example.com",
      telefone: 11987654322,
    },
    {
      id: "3",
      nome: "Ciclano de Oliveira",
      cpf: 45612378900,
      role: "professor",
      disciplinaMinistrada: "História",
      email: "ciclano@example.com",
      telefone: 11987654323,
    },
    {
      id: "4",
      nome: "Maria José",
      cpf: 78912345600,
      role: "professor",
      disciplinaMinistrada: "Geografia",
      email: "maria@example.com",
      telefone: 11987654324,
    },
    {
      id: "5",
      nome: "João Pedro",
      cpf: 32165498700,
      role: "professor",
      disciplinaMinistrada: "Ciências",
      email: "joao@example.com",
      telefone: 11987654325,
    },
    {
      id: "6",
      nome: "Ana Paula",
      cpf: 45678912300,
      role: "professor",
      disciplinaMinistrada: "Física",
      email: "ana@example.com",
      telefone: 11987654326,
    },
    {
      id: "7",
      nome: "Pedro Henrique",
      cpf: 78945612300,
      role: "professor",
      disciplinaMinistrada: "Química",
      email: "pedro@example.com",
      telefone: 11987654327,
    },
    {
      id: "8",
      nome: "Lucas Silva",
      cpf: 12378945600,
      role: "professor",
      disciplinaMinistrada: "Inglês",
      email: "lucas@example.com",
      telefone: 11987654328,
    },
    {
      id: "9",
      nome: "Mariana Santos",
      cpf: 45678932100,
      role: "professor",
      disciplinaMinistrada: "Educação Física",
      email: "mariana@example.com",
      telefone: 11987654329,
    },
    {
      id: "10",
      nome: "Ricardo Alves",
      cpf: 78912345600,
      role: "professor",
      disciplinaMinistrada: "Artes",
      email: "ricardo@example.com",
      telefone: 11987654330,
    },
  ]);

  const [isEditing, setIsEditing] = useState<any>();

  const finalRef = useRef(null);
  const initialRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      console.log(isEditing);
    }
  }, [isEditing]);

  const [result, setResult] = useState<User[]>();

  function pesquisar(searchTerm: string, data: User[]): User[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return data.filter((user) => {
      const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
      const lowerCaseRole = user.role.toLowerCase();
      const lowerCasePeriodoCursado = user.periodoCursado?.toLowerCase() || "";
      const lowerCaseDisciplinaMinistrada =
        user.disciplinaMinistrada?.toLowerCase() || "";
      const lowerCaseIdOrientador = user.idOrientador?.toLowerCase() || "";
      const lowerCaseEmail = user.email.toLowerCase();

      return (
        lowerCaseNome.includes(lowerCaseSearchTerm) ||
        (user.cpf &&
          removeAcentos(user.cpf.toString()).includes(lowerCaseSearchTerm)) ||
        lowerCaseRole.includes(lowerCaseSearchTerm) ||
        (user.matricula &&
          user.matricula.toString().includes(lowerCaseSearchTerm)) ||
        lowerCasePeriodoCursado.includes(lowerCaseSearchTerm) ||
        lowerCaseDisciplinaMinistrada.includes(lowerCaseSearchTerm) ||
        lowerCaseIdOrientador.includes(lowerCaseSearchTerm) ||
        lowerCaseEmail.includes(lowerCaseSearchTerm)
      );
    });
  }

  useEffect(() => {
    if (searchTerm.length > 0) {
      const result = pesquisar(searchTerm, data);
      setResult(result);
    } else {
      setResult(undefined);
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
          headers={["ID", "Nome", "CPF", "Telefone", ""]}
          data={result ? result : data}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
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
