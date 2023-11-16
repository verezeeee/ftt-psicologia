import { Divider, Flex, Text, Box, Grid, GridItem, Checkbox } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import { SecretarioSignUpData } from "../../../../utils/types";
import { useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";
import { useState } from "react";
import { formatarCPF } from "../../../../utils/cpf";
import { formatarTelefone } from "../../../../utils/formatarTelefone";
import Editar from "../Editar";
import { MdCreate } from "react-icons/md";

export default function VisualizarSecretario({
  userData: {
  nome,
  email,
  cpf,
  telefoneContato,
  turno,
  },
  setMobile,
  user,
}: {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  turno: string;
  setMobile?: (mobile: boolean) => void;
  user: SecretarioSignUpData;
  userData: any;
}) {
  const router = useRouter();
  const navegarParaOutraPasta = () => {
    router.push('/');
  };
  const [ isMobile] = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();

  return (
    <>
      {isMobile ? (
        <Flex flexDir="column" w="100%" ml={isMobile ? 0 : 300} transition="margin-left 0.3s ease" color="#787878">
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
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
        <Button onPress={navegarParaOutraPasta} label="Voltar"/>
      </Flex>
      ) : (
          <Flex>
        <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} />
        <Flex 
        flexDir="column" 
        w="100%" 
        ml={isMobile ? 0 : 300} 
        transition="margin-left 0.3s ease" 
        color="#787878"
        >
          <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          />
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
            <Box width={isMobile ? '100%' : '2rem'} px={isMobile ? '0' : '2rem'} mt="4">
              <Button onPress={navegarParaOutraPasta} label="Voltar" />
              <Editar
              role="secretary"
              editData={isEditing}
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