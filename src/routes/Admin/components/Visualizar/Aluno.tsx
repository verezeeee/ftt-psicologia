import { Divider, Flex, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from "react";
import Table from "../../../../components/Tables";
import { useMediaQuery } from "@chakra-ui/react";
import { AlunoSignUpData, PacienteSignUpData } from "../../../../utils/types";
import Search from "../../../../components/Search";
import Editar from "../Editar";
import { MdCreate } from "react-icons/md";
import Excluir from "../Excluir";
import axios from "axios";
import { removeAcentos } from "../../../../utils/removeAcentos";

export default function VisualizarAluno({
  mobile,
  userData: {
    nome,
    email,
    matricula,
    professorNome: professor,
    professorDisciplina: disciplina,
    telefoneContato,
    periodo,
    cpf,
    _id,
    role,
  },
  setMobile,
  user,
}: {
  mobile: boolean;
  nome: string;
  email: string;
  matricula: string;
  telefoneContato: string;
  professor: string;
  periodo: string;
  setMobile: (mobile: boolean) => void;
  user: AlunoSignUpData;
  userData: any;
}) {
  const router = useRouter();

  const navegarParaHome = () => {
    router.push('/');
  };

  const abrirExcluir = () => {
    setExcluirAberto(true);
  };
  const fecharExcluir = () => {
    setExcluirAberto(false);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<PacienteSignUpData[]>([]);
  const [excluirAberto, setExcluirAberto] = useState<boolean>(false);
  const shouldFetchData = useRef<boolean>(true);
  const [originalData, setOriginalData] = useState<PacienteSignUpData[]>([]);

  async function getUsers(): Promise<PacienteSignUpData[]> {
    try {
      const res = await axios.get<PacienteSignUpData[]>(`http://localhost:8080/auth/getPacientesByIdAluno/${router.query.id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.error("Erro ao obter os Pacientes:", error);
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

      if (searchTerm.length > 0) {
        const filteredResult = pesquisar(searchTerm, result);
        setResult(filteredResult);
      }
    }

    fetchData();
  }, [shouldFetchData, searchTerm]);

  function pesquisar(searchTerm: string, data: PacienteSignUpData[]): PacienteSignUpData[] {
    const lowerCaseSearchTerm = removeAcentos(searchTerm.toLowerCase()).trim();

    return data.filter((user) => {
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
    <>
      {isMobile ? (
        <Flex
          flexDir="column"
          alignItems={isMobile ? "center" : null}

        >
          <Text
            color="#000000"
            fontSize="1.8rem"
            margin={isMobile ? "5rem 0" : 0}
          >
            Informações sobre aluno
          </Text>
          <Divider />
          <Grid templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"} gap={6} p="4">
            <GridItem w="100%" h="10">
              <Box>
                <Text minWidth="18rem" maxWidth="18rem">
                  Nome completo
                </Text>
                <Text fontSize="1.6rem">Higor Giovane Monteiro Torres</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9">
              <Box>
                <Text>E-mail</Text>
                <Text fontSize="1.6rem">higorgiovane7@gmail.com</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9" >
              <Box>
                <Text>Disciplina</Text>
                <Text fontSize="1.6rem">{disciplina}</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9" mb="4">
              <Box>
                <Text>Matrícula</Text>
                <Text fontSize="1.6rem">7654321</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9" mb="4">
              <Box>
                <Text>Telefone</Text>
                <Text fontSize="1.6rem">(11) 91234-5678</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9" mb="4">
              <Box>
                <Text>Professor</Text>
                <Text fontSize="1.6rem">Henrique Lima</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" mt="9" mb="4">
              <Box>
                <Text>Periodo</Text>
                <Text fontSize="1.6rem">4º </Text>
              </Box>
            </GridItem>
          </Grid>
          <Divider />
          <Flex
            w="100%"
            p="4"
            style={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              border: "1px black",
            }}
          >
            <Text fontSize="1.5rem" paddingLeft="1rem">
              Relatórios
            </Text>
            <Table
              headers={["Nome", "CPF", "Tratamento"]}
              data={result}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              type="paciente"
            />
          </Flex>
          <Flex
            display='flex'
            flexDir='row'
            justifyContent='space-between'
            w='100%'
          >
            <Button
              icon={MdCreate}
              onPress={() => {
                setIsEditing(true);
              }}
              label="Editar"
              width="50%"
            />
            <Button
              onPress={abrirExcluir}
              label="Excluir"
              bg="white"
              border="2px solid #C30B0B"
              color="#C30B0B"
              _hover={{
                backgroundColor: "#C30B0B",
                opacity: 0.9,
                color: "#FFF",
                transition: "0.3s",
              }}
              width="50%"
            />
          </Flex>
          <Flex
            width='100%'
            flexDir='column'
          >
            <Button onPress={navegarParaHome} label="Voltar" />
          </Flex>
          <Excluir
            isOpen={excluirAberto}
            onClose={fecharExcluir}
            closeModal={fecharExcluir}
            excluirData={{
              _id,
              periodo,
            }}
          />
          <Editar
            role="student"
            editData={{
              nome,
              email,
              matricula,
              telefoneContato,
              professor,
              periodo,
              cpf,
              _id,
            }}
            editarOpened={isEditing ? true : false}
            setEditarOpened={setIsEditing}
          />
        </Flex>
      ) : (
        <Flex>
          <Flex
            flexDir="column"
            w="100%"
            ml={mobile ? 0 : 300}
            transition="margin-left 0.3s ease"
            color="#787878"
          >
            <Flex
              flexDir="column"
            >
              <Flex
                w="100%"
                flexDir="row"
                justify="space-between"
                mt='5rem'
              >
                <Flex
                  display='flex'
                  flexDir='row'
                  justifyContent='space-between'
                  w='100%'
                >
                  <Text
                    color="#000000"
                    fontSize="1.8rem"
                    p='4'
                  >
                    Informações sobre aluno
                  </Text>
                  <Button
                    icon={MdCreate}
                    mx={2}
                    mt={4}
                    onPress={() => {
                      setIsEditing(true);
                    }}
                    label="Editar"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Divider />
            <Grid templateColumns="repeat(4, 1fr)" gap={3} p="4">
              <GridItem w="100%">
                <Box>
                  <Text w="100%" mt="9">
                    Nome completo
                  </Text>
                  <Text fontSize="1.6rem">
                    {nome}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
              <GridItem w="100%" mt="9">
                <Box>
                  <Text>Matricula</Text>
                  <Text fontSize="1.6rem">
                    {matricula}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w="100%" mt="9">
                <Box>
                  <Text>Periodo</Text>
                  <Text fontSize="1.6rem">
                    {periodo}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w="100%" mt="9" mb="4">
                <Box>
                  <Text>E-mail</Text>
                  <Text fontSize="1.6rem">
                    {email}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
              <GridItem w="100%" mt="9" mb="4">
                <Box>
                  <Text>Telefone</Text>
                  <Text fontSize="1.6rem">
                    {telefoneContato}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
              <GridItem w="100%" mt="9" mb="4">
                <Box>
                  <Text>Disciplina</Text>
                  <Text fontSize="1.6rem">
                    {disciplina}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
              <GridItem w="100%" mt="9" mb="4">
                <Box>
                  <Text>Professor</Text>
                  <Text fontSize="1.6rem">
                    {professor}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
            </Grid>
            <Flex
              w="100%"
              p='4'
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}>
              <Box
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                marginRight='2rem'
              >
                <Text
                  fontSize="1.5rem"
                  p='2'
                >
                  Relatorio
                </Text>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </Box>
              <Table
                headers={["Nome", "CPF", "Tratamento",]}
                data={result}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                type="paciente"
              />
            </Flex>
            <Box
              width={!mobile ? '100%' : '2rem'}
              px={mobile ? '0' : '2rem'}
              mt="4"
              mb="4"
              display='flex'
              flexDir='row'
              justifyContent='space-between'
            >
              <Button
                onPress={navegarParaHome}
                label="Voltar"
              />
              <Button
                onPress={abrirExcluir}
                label="Excluir"
                bg="white"
                border="2px solid #C30B0B;"
                color="#C30B0B;"
                _hover={{
                  backgroundColor: "#C30B0B",
                  opacity: 0.9,
                  color: "#FFF",
                  transition: "0.3s",
                }}
              />
              <Excluir
                isOpen={excluirAberto}
                onClose={fecharExcluir}
                closeModal={fecharExcluir}
                excluirData={{
                  _id,
                  periodo,
                }}
              />
              <Editar
                role="student"
                editData={{
                  nome,
                  email,
                  matricula,
                  telefoneContato,
                  professor,
                  periodo,
                  cpf,
                  _id,
                }}
                editarOpened={isEditing ? true : false}
                setEditarOpened={setIsEditing}
              />
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
}