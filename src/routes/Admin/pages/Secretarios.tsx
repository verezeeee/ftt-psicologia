import { Flex, Text } from "@chakra-ui/react";
import { User } from "../../../utils/types";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Table from "../../../components/Tables";
import Search from "../../../components/Search";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";
import { IoMdPersonAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { removeAcentos } from "../../../utils/removeAcentos";
import Cadastrar from "../components/Cadastrar";

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
      role: "student",
      matricula: 3214457,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "JoseduarteGarcia@gmail.com",
    },
    {
      id: "2",
      nome: "Antônio Borges Carvalho",
      cpf: 81205898077,
      role: "student",
      matricula: 1143367,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "Toninhocarvalho@gmail.com",
    },
    {
      id: "3",
      nome: "Fernanda Barros Vieira",
      cpf: 94182651090,
      role: "student",
      matricula: 6919742,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "fernandavivi@gmail.com",
    },
    {
      id: "4",
      nome: "Juliana Cardoso Garcia",
      cpf: 58974846004,
      role: "student",
      matricula: 4679211,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "jucardoso2023@gmail.com",
    },
    {
      id: "5",
      nome: "Luiz Moraes Ferreira",
      cpf: 54915506045,
      role: "student",
      matricula: 9151769,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "MoraesLuiz@hotmail.com",
    },
    {
      id: "6",
      nome: "Patricia Teiixeira Moura",
      cpf: 29582882486,
      role: "student",
      matricula: 2605591,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "Teixeirapaty@gmail.com",
    },
    {
      id: "7",
      nome: "João Campos Barros",
      cpf: 43550774036,
      role: "student",
      matricula: 6198755,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "JoãoCampos26@gmail.com",
    },
    {
      id: "8",
      nome: "Marcia Andrade Santos",
      cpf: 40641207018,
      role: "student",
      matricula: 5447821,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "marciaandrade2020@gmail.com",
    },
    {
      id: "9",
      nome: "Marcos Dias Teixeira",
      cpf: 73433408084,
      role: "student",
      matricula: 7842146,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "Marcosdias@hotmail.com",
    },
    {
      id: "10",
      nome: "João Moraes Medeiros",
      cpf: 48275468078,
      role: "student",
      matricula: 6587429,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "joãomedeirosmoraaes@gmail.com",
    },
    {
      id: "11",
      nome: "Ana Santos Batista",
      cpf: 81382983085,
      role: "student",
      matricula: 5874693,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "anasantosbatista@hotmail.com",
    },
    {
      id: "12",
      nome: "Luiz Barros Almeida",
      cpf: 82318598029,
      role: "student",
      matricula: 4517423,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "LuizBarros1998@gmail.com",
    },
    {
      id: "13",
      nome: "Pedro Soares Ramos",
      cpf: 70285886029,
      role: "student",
      matricula: 2485567,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "pedroramos@gmail.com",
    },
    {
      id: "14",
      nome: "Francisca Marques Barros",
      cpf: 77485923064,
      role: "student",
      matricula: 3598874,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "franmarques9090@gmail.com",
    },
    {
      id: "15",
      nome: "Yasmim Pereira Castro",
      cpf: 74130306081,
      role: "student",
      matricula: 6877924,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "mimcastrro@gmail.com",
    },
    {
      id: "16",
      nome: "Maria Antonia Soares",
      cpf: 38292995825,
      role: "student",
      matricula: 8765442,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "MAntoniaSoares@gmail.com",
    },
    {
      id: "17",
      nome: "Adriana Freitas Gomes",
      cpf: 89171995827,
      role: "student",
      matricula: 65321477,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "AdrianaFGomes@gmail.com",
    },
    {
      id: "18",
      nome: "Ronaldo Lima Da Silva",
      cpf: 23450046063,
      role: "student",
      matricula: 6547821,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "naldooLima05@gmail.com",
    },
    {
      id: "19",
      nome: "Clara Ramos Souza",
      cpf: 84456899085,
      role: "student",
      matricula: 9648755,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "Clarinharamos@gmail.com",
    },
    {
      id: "20",
      nome: "Paulo Vitor Vieira",
      cpf: 37151994829,
      role: "student",
      matricula: 6985473,
      periodoCursado: "2020.1",
      disciplina: "Cálculo 1",
      disciplinaMinistrada: "",
      idOrientador: "123456789",
      idSecretaria: "123456789",
      email: "VitinPaulo@gmail.com",
    },
  ]);

  const [result, setResult] = useState<User[]>();

  function pesquisar(searchTerm: string, data: User[]): User[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return data.filter((user) => {
      const lowerCaseNome = removeAcentos(user.nome.toLowerCase());
      const lowerCaseRole = user.role.toLowerCase();
      const lowerCasePeriodoCursado = user.periodoCursado?.toLowerCase() || "";
      const lowerCaseDisciplina = user.disciplina?.toLowerCase() || "";
      const lowerCaseDisciplinaMinistrada =
        user.disciplinaMinistrada?.toLowerCase() || "";
      const lowerCaseIdOrientador = user.idOrientador?.toLowerCase() || "";
      const lowerCaseIdSecretaria = user.idSecretaria?.toLowerCase() || "";
      const lowerCaseEmail = user.email.toLowerCase();

      return (
        lowerCaseNome.includes(lowerCaseSearchTerm) ||
        (user.cpf &&
          removeAcentos(user.cpf.toString()).includes(lowerCaseSearchTerm)) ||
        lowerCaseRole.includes(lowerCaseSearchTerm) ||
        (user.matricula &&
          user.matricula.toString().includes(lowerCaseSearchTerm)) ||
        lowerCasePeriodoCursado.includes(lowerCaseSearchTerm) ||
        lowerCaseDisciplina.includes(lowerCaseSearchTerm) ||
        lowerCaseDisciplinaMinistrada.includes(lowerCaseSearchTerm) ||
        lowerCaseIdOrientador.includes(lowerCaseSearchTerm) ||
        lowerCaseIdSecretaria.includes(lowerCaseSearchTerm) ||
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
          headers={["ID", "Nome", "CPF", "Tratamento"]}
          data={result ? result : data}
        />
      </Flex>
      <Cadastrar
        cadastrarOpened={cadastrarOpened}
        setCadastrarOpened={setCadastrarOpened}
      />
    </Flex>
  );
}
