import { Divider, Flex, Text, Box, Grid, GridItem, Checkbox } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import { SecretarioSignUpData } from "../../../../utils/types";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { formatarCPF } from "../../../../utils/cpf";
import { formatarTelefone } from "../../../../utils/formatarTelefone";
import Editar from "../Editar";
import { MdCreate } from "react-icons/md";
import Excluir from "../Excluir";

export default function VisualizarSecretario({
  userData: {
    nome,
    email,
    cpf,
    telefoneContato,
    turno,
    _id,
    role,
  },
  user,
}: {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  turno: string;
  user: SecretarioSignUpData;
  userData?: any;
}) {
  const router = useRouter();

  const navegarParaOutraPasta = () => {
    router.push('/');
  };
  const abrirExcluir = () => {
    setExcluirAberto(true)
  };
  const fecharExcluir = () => {
    setExcluirAberto(false)
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();
  const [excluirAberto, setExcluirAberto] = useState<boolean>(false);

  return (
    <>
      {isMobile ? (
        <Flex flexDir="column" w="100%" ml={isMobile ? 0 : 300} transition="margin-left 0.3s ease" color="#787878">
          <Flex flexDir="column" p="0" pt="6" w='100%'>
            <Flex w="100%" flexDir="row" justify="space-between" mt='5rem'>
              <Text color="#000000" fontSize="1.8rem" flexDir="column" p='4'>
                Informações sobre secretário
              </Text>
            </Flex>
          </Flex>
          <Divider />
          <Grid templateColumns='1fr' gap={6} p='4'>
            <GridItem w='100%' h='100'>
              <Text>
                Nome completo
              </Text>
              <Text fontSize='1.6rem'>
                {nome}
              </Text>
            </GridItem>
            <GridItem w='100%' h='100'>
              <Text>
                E-mail
              </Text>
              <Text fontSize='1.6rem'>
                {email}
              </Text>
            </GridItem>
            <GridItem w='100%' h='100'>
              <Text>
                Telefone
              </Text>
              <Text fontSize='1.6rem'>
                {formatarTelefone(telefoneContato)}
              </Text>
            </GridItem>
            <GridItem w='100%' h='100'>
              <Text>
                Turno
              </Text>
              <Text fontSize='1.6rem'>
                {turno}
              </Text>
            </GridItem>
            <GridItem w='100%' h='100'>
              <Text>
                CPF
              </Text>
              <Text fontSize='1.6rem'>
                {formatarCPF(cpf)}
              </Text>
            </GridItem>
          </Grid>
          <Box
            display='flex'
            flexDir='row'
            justifyContent='space-between'
            w='100%'>
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
              border="2px solid #C30B0B;"
              color="#C30B0B;"
              _hover={{
                backgroundColor: "#C30B0B",
                opacity: 0.9,
                color: "#FFF",
                transition: "0.3s",
              }}
              width="50%"
            />
          </Box>
          <Button onPress={navegarParaOutraPasta} label="Voltar" />
          <Excluir
            isOpen={excluirAberto}
            onClose={fecharExcluir}
            closeModal={fecharExcluir}
            excluirData={{
              _id,
              turno,
            }}
          />
          <Editar
            role="secretary"
            editData={{
              nome,
              email,
              cpf,
              telefoneContato,
              turno,
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
            ml={isMobile ? 0 : 300}
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
                    flexDir="column"
                    p='4'
                  >
                    Informações sobre secretário
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
            <Grid templateColumns='repeat(2, 1fr)' gap={6} p='4'>
              <GridItem w='100%' h='10'>
                <Box>
                  <Text>
                    Nome completo
                  </Text>
                  <Text fontSize='1.6rem'>
                    {nome}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' />
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    E-mail
                  </Text>
                  <Text fontSize='1.6rem'>
                    {email}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    Telefone
                  </Text>
                  <Text fontSize='1.6rem'>
                    {formatarTelefone(telefoneContato)}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    Turno
                  </Text>
                  <Text fontSize='1.6rem'>
                    {turno}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    CPF
                  </Text>
                  <Text fontSize='1.6rem'>
                    {formatarCPF(cpf)}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Box
              width="100% "
              px={isMobile ? '0' : '2rem'}
              mt="4"
              display='flex'
              flexDir='row'
              justifyContent='space-between'>
              <Button onPress={navegarParaOutraPasta} label="Voltar" />
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
                  turno,
                }}
              />
              <Editar
                role="secretary"
                editData={{
                  nome,
                  email,
                  cpf,
                  telefoneContato,
                  turno,
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