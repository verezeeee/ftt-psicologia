import { Divider, Flex, Text, Box} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState } from "react";

export default function Visualizar({
  mobile,
  nome,
  email,
  cpf,
  telefone,
  turno,
  setMobile,
}: {
  mobile: boolean;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  turno: string;
  setMobile: false;
}) {
  const router = useRouter();

  const navegarParaOutraPasta = () => {
    router.push('/');
  };

  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();
  return (
    <Flex>
      <Sidebar 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      />
      <Flex 
      flexDir="column" 
      w="100%" 
      ml={mobile ? 0 : 300} 
      transition="margin-left 0.3s ease"
      >
        <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} />
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
          p='0'
          >
            <Text 
            color="#787878" 
            fontSize="1.8rem" 
            flexDir="column">
              Informações sobre secretário
            </Text>
            <Button 
            label="Editar" 
            onPress={navegarParaOutraPasta} 
            filled 
            />
          </Flex>
          <Divider 
          mt="4" 
          />
          <Flex 
          flexDir="column" 
          py="4" 
          w={mobile ? "100%" : "50%"} 
          transition="width 0.3s ease"
          color="#787878"
          >
          <Text 
          fontSize="1rem"
          >
              Nome
            </Text>
            <Text 
            fontSize="1.6rem" 
            >
              Higor Giovane 
            </Text>
            {!mobile ? (
            <Flex 
            w="100%"  
            justify="space-between">
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem"  >
              E-mail
            </Text>
            <Text 
            fontSize="1.6rem" >
              higorgiovaneteste@gmail.com 
            </Text>
            </Box>
            <Flex 
            w={10}  
            />
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem" 
            >
              Telefone
            </Text>
            <Text 
            fontSize="1.6rem" >
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
            fontSize="1.6rem" >
              higorgiovaneteste@gmail.com 
            </Text>
            </Box>
            <Flex 
            w={10} />
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem" >
              Telefone
            </Text>
            <Text 
            fontSize="1.6rem" >
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
            fontSize="1rem" >
              Turno
            </Text>
            <Text 
            fontSize="1.6rem" >
              Matutino 
            </Text>
            </Box>
            <Flex 
            w={10} />
            <Box 
            flexDir='column'>
            <Text 
            fontSize="1rem" >
              CPF
            </Text>
            <Text 
            fontSize="1.6rem" >
              123.456.789-12
            </Text>
            </Box>
            </Flex>
            </Flex>
          </Flex>
          <Box 
          width={mobile ? '100%' : '2rem'} 
          px={mobile ? '0' : '2rem'} 
          mt="4">
            <Button onPress={navegarParaOutraPasta} label="Voltar"/>
          </Box>
        </Flex>
      </Flex>
  );
}