import { Divider, Flex, Text, Box, Spacer, HStack} from "@chakra-ui/react";
import Button from "../components/Button";
import { useRouter } from 'next/router';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Table from "../components/Tables";
import { SecretarioSignUpData } from "../utils/types";
import Search from "../components/Search";

export default function Visualizar({
  mobile,
  nome,
  email,
  cpf,
  telefone,
  turno,
  setMobile,
  user,
}: {
  mobile: boolean;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  turno: string;
  setMobile: false;
  user: SecretarioSignUpData;
}) {
  const router = useRouter();

  const navegarParaHome = () => {
    router.push('/');
  };

  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<SecretarioSignUpData[]>([]);
  
  
  return (
    <Flex>
      <Sidebar 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} />
      <Flex 
      flexDir="column" 
      w="100%" 
      ml={mobile ? 0 : 300} 
      transition="margin-left 0.3s ease" 
      color="#787878"
      
      >
        <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
        <Flex 
        flexDir="column" 
        p="0" 
        pt="6"
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
            color="#787878" 
            fontSize="1.8rem" 
            flexDir="column"
            p='4'
            >
              Informações sobre aluno
            </Text>

            <Button 
            label="Editar"
            onPress={navegarParaHome} 
            filled
            width='7rem'
            />
            </Flex>
            </Flex>
          </Flex>
          <Divider mt="4" />
          <Box 
          p='6'
          fontSize='1rem'>
            <Flex>
            <Box >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Nome
            </Text>
            <Text fontSize='1.6rem'>
              Higor Giovane
            </Text>
            </Box>  
            <Spacer/>
            <Box>
            <Text>
            Matrícula
            </Text>
            <Text fontSize='1.6rem'>
              2310870
            </Text>
            </Box>
            <Spacer/>
            <Box>
            <Text>
            Periodo
            </Text>
            <Text fontSize='1.6rem'>
            4
            </Text>
            </Box>
            <Spacer/>
            </Flex>
            <Flex
            mt='1rem'>
            <Box >
            <Text>
            Email
            </Text>
            <Text 
            fontSize='1.6rem' 
            minWidth='18rem'
            maxWidth='18rem'>
              
            higorgiovane7@gmail.com
            </Text>
            </Box>  
            <Spacer/>
            <Box>
            <Text>
            Telefone
            </Text>
            <Text fontSize='1.6rem'>
             62 985194415
            </Text>
            </Box>
            <Spacer/>
            <Spacer/>
            </Flex>
            <Flex
            mt='1rem'>
            <Box >
            <Text>
            Disciplina
            </Text>
            <Text 
            fontSize='1.6rem' 
            minWidth='18rem'
            maxWidth='18rem'>
              
            Psicologia Ativa
            </Text>
            </Box>  
            <Spacer/>
            <Box>
            <Text>
            Professor
            </Text>
            <Text fontSize='1.6rem'>
            Henrique Lima
            </Text>
            </Box>
            <Spacer/>
            <Spacer/>
            </Flex>
            </Box>
            <Box>
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
            <Search />

            </Box>
            <Table
            headers={["Id","Data", "Paciente", "Tratamento",]}
            data={result}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            type="secretario"     
            />
          </Flex>
          </Box>
          <Box 
          width={!mobile ? '100%' : '2rem'} 
          px={mobile ? '0' : '2rem'} 
          mt="4"
          mb="4"
          >
            <Button 
            onPress={navegarParaHome} 
            label="Voltar"
            width='7rem'/>
          </Box>
        </Flex>
      </Flex>
  );
}