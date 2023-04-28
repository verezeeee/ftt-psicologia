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
  const [data, setData] = useState<User[]>([
    {
      id: "1",
      nome: "José Duarte Garcia",
      cpf: 86120483039,
      telefone: 11999999999,
      role: "secretary",
      matricula: 3214457,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "JoseduarteGarcia@gmail.com",
      turno: "matutino",
    },
    {
      id: "2",
      nome: "Antônio Borges Carvalho",
      cpf: 81205898077,
      telefone: 11999999999,
      role: "secretary",
      matricula: 1143367,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "Toninhocarvalho@gmail.com",
      turno: "matutino",
    },
    {
      id: "3",
      nome: "Fernanda Barros Vieira",
      cpf: 94182651090,
      telefone: 11999999999,
      role: "secretary",
      matricula: 6919742,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "fernandavivi@gmail.com",
      turno: "vespertino",
    },
    {
      id: "4",
      nome: "Juliana Cardoso Garcia",
      cpf: 58974846004,
      role: "secretary",
      telefone: 11999999999,
      matricula: 4679211,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "jucardoso2023@gmail.com",
      turno: "vespertino",
    },
    {
      id: "5",
      nome: "Luiz Moraes Ferreira",
      cpf: 54915506045,
      role: "secretary",
      telefone: 11999999999,
      matricula: 9151769,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "MoraesLuiz@hotmail.com",
      turno: "noturno",
    },
    {
      id: "6",
      nome: "Patricia Teiixeira Moura",
      cpf: 29582882486,
      role: "secretary",
      matricula: 2605591,
      periodoCursado: "2020.1",
      telefone: 11999999999,
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "Teixeirapaty@gmail.com",
      turno: "noturno",
    },
    {
      id: "7",
      nome: "Marcia Andrade Santos",
      cpf: 40641207018,
      role: "secretary",
      telefone: 11999999999,
      matricula: 5447821,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "marciaandrade2020@gmail.com",
      turno: "vespertino",
    },
    {
      id: "8",
      nome: "Marcos Dias Teixeira",
      cpf: 73433408084,
      role: "secretary",
      matricula: 7842146,
      telefone: 11999999999,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "Marcosdias@hotmail.com",
      turno: "noturno",
    },
    {
      id: "9",
      nome: "João Moraes Medeiros",
      cpf: 48275468078,
      role: "secretary",
      matricula: 6587429,
      periodoCursado: "2020.1",
      telefone: 11999999999,
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "joãomedeirosmoraaes@gmail.com",
      turno: "noturno",
    },
    {
      id: "10",
      nome: "Ana Santos Batista",
      cpf: 81382983085,
      role: "secretary",
      matricula: 5874693,
      telefone: 11999999999,
      periodoCursado: "2020.1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "anasantosbatista@hotmail.com",
      turno: "noturno",
    },
    {
      id: "11",
      nome: "Luiz Barros Almeida",
      cpf: 82318598029,
      role: "secretary",
      matricula: 4517423,
      periodoCursado: "2020.1",
      telefone: 11999999999,
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      email: "LuizBarros1998@gmail.com",
      turno: "vespertino",
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
