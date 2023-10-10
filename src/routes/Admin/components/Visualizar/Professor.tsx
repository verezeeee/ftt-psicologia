import { Divider, Flex, Text, Box} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState } from "react";
import Table from "../../../../components/Tables";
import { SecretarioSignUpData } from "../../../../utils/types";

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
        p="8" 
        pt="6"
        >
          <Flex 
          w="100%" 
          flexDir="row" 
          justify="space-between" 
          align="end"
          position='relative'
          mt='5rem'
          p='0'>
            <Text 
            color="#787878" 
            fontSize="1.8rem" 
            flexDir="column"
            >
              Informações sobre professor
            </Text>
            <Flex
            position='absolute'
            marginLeft="calc(100% - 3%)"
            align='end'>
            <Button 
            label="Editar"
            onPress={navegarParaHome} 
            filled
            />
            </Flex>
          </Flex>
          <Divider mt="4" />
          <Flex 
          flexDir="column"
          py="4" 
          w={mobile ? "100%" : "50%"} 
          transition="width 0.3s ease" >
          <Text 
          fontSize="1rem" >
              Nome
            </Text>
            <Text fontSize="1.6rem" >
              Higor Giovane 
            </Text>
            {!mobile ? (
            <Flex
             w="100%"  
             justify="space-between">
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem" >
              E-mail
            </Text>
            <Text 
            fontSize="1.6rem" >
              higorgiovaneteste@gmail.com 
            </Text>
            </Box>
            <Flex 
            w={10}  />
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem"  >
              Telefone
            </Text>
            <Text 
            fontSize="1.6rem">
              00 00000-0000
            </Text>
            </Box>
            </Flex>
            ) : (
              <Flex
               w="100%" 
               justify="space-between" >
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem" >
              E-mail
            </Text>
            <Text 
            fontSize="1.6rem">
              higorgiovaneteste@gmail.com 
            </Text>
            </Box>
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem">
              Telefone
            </Text>
            <Text 
            fontSize="1.6rem">
              00 00000-0000
            </Text>
            </Box>
            </Flex>
            )}
            <Flex 
            justify="space-between">
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem">
              Disciplina
            </Text>
            <Text 
            fontSize="1.6rem">
              Psicologia ativa
            </Text>
            </Box>
            </Flex>
            </Flex>
            </Flex>
            <Flex 
            w="100%" 
            p='4' 
            style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            border: "1px black"
            }}>
            <Text 
            fontSize="1.5rem" 
            paddingLeft='1rem'
            >
            Alunos
            </Text>
            <Table
            headers={["Id","Nome", "CPF", "Período",]}
            data={result}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            type="secretario"     
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
            label="Voltar"/>
            <Button 
            onPress={navegarParaHome} 
            label="Excluir"
            bg="white"
            border="2px solid #C30B0B;"
            color="#C30B0B;"
            _hover= {{
              backgroundColor: "#C30B0B",
              opacity: 0.9,
              color: "#FFF",
              transition: "0.3s",
            }}
            />
          </Box>
        </Flex>
      </Flex>
  );
}