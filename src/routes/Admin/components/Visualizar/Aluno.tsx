import { Divider, Flex, Text, Box, Grid, GridItem, Spacer} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState } from "react";
import Table from "../../../../components/Tables";
import { useMediaQuery } from "@chakra-ui/react";
import { SecretarioSignUpData } from "../../../../utils/types";
import Search from "../../../../components/Search";

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

  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const [activeTab, setActiveTab] = useState("tab1");
  const [isEditing, setIsEditing] = useState<any>();
  const [result, setResult] = useState<SecretarioSignUpData[]>([]);
  
  
  return (
    <>
    {isMobile ? (
       <Flex
       flexDir="column"
       alignItems={isMobile ? "center" : null} 
      
     >
       
       <Header activeTab={activeTab} setActiveTab={setActiveTab} />
       <Text
         color="#787878"
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
             <Text fontSize="1.6rem">Psicologia Ativa</Text>
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
       <Divider/>
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
           headers={["Id", "Data", "Paciente", "Aluno", "Tratamento"]}
           data={result}
           isEditing={isEditing}
           setIsEditing={setIsEditing}
           type="secretario"
         />
       </Flex>
       <Flex
         w="100%"
         p="4"
         flexDir={isMobile ? "column" : "row"}
         justifyContent={isMobile ? "center" : "space-between"}
       >
         <Button onPress={navegarParaHome} label="Voltar" />
         <Button
           onPress={navegarParaHome}
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
         />
       </Flex>
     </Flex>
    ) : (
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
          <Divider />
          <Grid templateColumns="repeat(4, 1fr)" gap={3} p="4">
          <GridItem w="100%">
            <Box>
              <Text w="100%" mt="9">
                  Nome completo
              </Text>
              <Text fontSize="1.6rem">Higor Giovane Monteiro Torres</Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w="100%" mt="9">
            <Box>
              <Text>Matricula</Text>
              <Text fontSize="1.6rem">7654321</Text>
            </Box>
          </GridItem>
          <GridItem w="100%" mt="9">
            <Box>
              <Text>Periodo</Text>
              <Text fontSize="1.6rem">4</Text>
            </Box>
          </GridItem>
          <GridItem w="100%" mt="9" mb="4">
            <Box>
              <Text>E-mail</Text>
              <Text fontSize="1.6rem">ana.oliveira@aluno.unievangelica.edu.br</Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w="100%" mt="9" mb="4">
            <Box>
              <Text>Telefone</Text>
              <Text fontSize="1.6rem">(11) 12345-6789</Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w="100%" mt="9" mb="4">
            <Box>
              <Text>Disciplina</Text>
              <Text fontSize="1.6rem">Psicologia Ativa</Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w="100%" mt="9" mb="4">
            <Box>
              <Text>Professor</Text>
              <Text fontSize="1.6rem">Henrique Lima</Text>
            </Box>
          </GridItem>
          <GridItem/>
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
    )}
    </>
  );
}