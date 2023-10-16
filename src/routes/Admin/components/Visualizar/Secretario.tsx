import { Divider, Flex, Text, Box, Grid, GridItem} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState } from "react";
import { SecretarioSignUpData } from "../../../../utils/types";
import { useMediaQuery } from "../../../../utils/useMediaQuery";

export default function Visualizar({
  nome,
  email,
  cpf,
  telefone,
  turno,
  setMobile,
  user,
}: {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  turno: string;
  setMobile: false;
  user: SecretarioSignUpData;
}) {
  const router = useRouter();

  const navegarParaOutraPasta = () => {
    router.push('/');
  };
  const { mobile, tablet, desktop } = useMediaQuery();

  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<SecretarioSignUpData[]>([]);
  
  
  return (
    <>
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
        w='100%'
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
              Informações do paciente
            </Text>

            </Flex>
            </Flex>
          </Flex>
          <Divider />
        <Grid templateColumns='repeat(2, 1fr)' gap={6} p='4'>
          <GridItem w='100%' h='10'>
          <Box 
            >
            <Text >
            Nome completo
            </Text>
            <Text fontSize='1.6rem'>
              Higor Giovane Monteiro Torres
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10'/>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            >
            <Text >
            E-mail
            </Text>
            <Text fontSize='1.6rem'>
              julianaalvespach@gmail.com
            </Text>
            </Box>
            </GridItem>
          <GridItem w='100%' h='10' mt='9'>
          <Box 
            >
            <Text >
            Telefone
            </Text>
            <Text fontSize='1.6rem'>
              (62) 98519-4415
            </Text>
            </Box>
            </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            >
            <Text >
            Turno
            </Text>
            <Text fontSize='1.6rem'>
              Matutino
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9'>
          <Box 
            >
            <Text >
            CPF
            </Text>
            <Text fontSize='1.6rem'>
              065.127.1431-13
            </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box 
          width={mobile ? '100%' : '2rem'} 
          px={mobile ? '0' : '2rem'} 
          mt="4">
            <Button onPress={navegarParaOutraPasta} label="Voltar"/>
          </Box>
      </Flex>
      </Flex>
    </>
  );
}