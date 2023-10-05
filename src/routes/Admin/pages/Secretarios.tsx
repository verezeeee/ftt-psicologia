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

export default function Pacientes({
  user,
  activeTab,
}: {
  user: User;
  activeTab?: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  const [cadastrarOpened, setCadastrarOpened] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");


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
          headers={["ID", "Nome", "CPF", "Turno", ""]}
          data={null}
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
