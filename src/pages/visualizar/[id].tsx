import { Divider, Flex, Text, Box, Grid, GridItem, Checkbox, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import Button from "../../components/Button";
import { useRouter } from 'next/router';
import { SecretarioSignUpData } from "../../utils/types";
import { useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";

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
  setMobile: (mobile: boolean) => void;
  user: SecretarioSignUpData;
}) {
  const router = useRouter();
  const { query } = useRouter()
  const id = query.id;
  const navegarParaOutraPasta = () => {
    router.push('/');
  };

  const [ isMobile] = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState("tab1");

  return( 
    <>
    {isMobile ? (
       <Flex flexDir="column" w="100%" ml={isMobile ? 0 : 300} transition="margin-left 0.3s ease" color="#787878">
       <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
       <Flex flexDir="column" p="0" pt="6" w='100%'>
         <Flex w="100%" flexDir="row" justify="space-between" mt='5rem'/>
       </Flex>
        <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              <Text color="#787878" fontSize="1.8rem" flexDir="column" p='4'>
             Informações do paciente
              </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Grid templateColumns='1fr' gap={6} p='4'>
         <GridItem w='100%' h='100'>
           <Text>
             Nome completo
           </Text>
           <Text fontSize='1.6rem'>
             Higor Giovane Monteiro Torres
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             E-mail
           </Text>
           <Text fontSize='1.6rem'>
             julianaalvespach@gmail.com
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             Estado Civil
           </Text>
           <Text fontSize='1.6rem'>
             Solteiro
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             Outro contato
           </Text>
           <Text fontSize='1.6rem'>
             (11) 12345-6789
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             Naturalidade
           </Text>
           <Text fontSize='1.6rem'>
             Anápolis
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             Religião
           </Text>
           <Text fontSize='1.6rem'>
             Católico
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
            Nome do contato/responsável
           </Text>
           <Text fontSize='1.6rem'>
           Pablo Henrique Martins
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Nacionalidade
           </Text>
           <Text fontSize='1.6rem'>
           Brasileira
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
             CPF
           </Text>
           <Text fontSize='1.6rem'>
           065.127.431-13
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Telefone
           </Text>
           <Text fontSize='1.6rem'>
           (62) 98519-4415
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Renda familiar
           </Text>
           <Text fontSize='1.6rem'>
           1 a 3 salários minimos
           </Text>
         </GridItem>
         <GridItem w='100%' h='100' alignItems='center' >
         <Box>
          <Checkbox isDisabled >Menor de idade</Checkbox>
          </Box>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Data de nascimento
           </Text>
           <Text fontSize='1.6rem'>
           29/04/2005
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Sexo
           </Text>
           <Text fontSize='1.6rem'>
           Feminino
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Profissão
           </Text>
           <Text fontSize='1.6rem'>
           Professor
           </Text>
         </GridItem>
       </Grid>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              <Text color="#787878" fontSize="1.8rem" flexDir="column" p='4'>
              Endereço
              </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Grid templateColumns='1fr' gap={6} p='4'>
         <GridItem w='100%' h='100'>
           <Text>
             CEP
           </Text>
           <Text fontSize='1.6rem'>
           01234-567
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Complemento
           </Text>
           <Text fontSize='1.6rem'>
             aaaaaa
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Logradouro
           </Text>
           <Text fontSize='1.6rem'>
           Rua das Flores
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Cidade
           </Text>
           <Text fontSize='1.6rem'>
           Anápolis
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Bairro
           </Text>
           <Text fontSize='1.6rem'>
           Jardim Primavera
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           UF
           </Text>
           <Text fontSize='1.6rem'>
           GO
           </Text>
         </GridItem>
         </Grid>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              <Text color="#787878" fontSize="1.8rem" flexDir="column" p='4'>
               Informações de tratamento
              </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Grid templateColumns='1fr' gap={6} p='4'>
         <GridItem w='100%' h='100'>
           <Text>
           Inicio do tratamento
           </Text>
           <Text fontSize='1.6rem'>
           15/03/2023
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Tipo de tratamento
           </Text>
           <Text fontSize='1.6rem'>
           Gestalt
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Termino do tratamento
           </Text>
           <Text fontSize='1.6rem'>
           15/03/2024
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
         <Box>
          <Checkbox isDisabled >Aluno UniEvangélica</Checkbox>
          </Box>
         </GridItem>
         <GridItem w='100%' h='100'>
           <Text>
           Quem encaminhou?
           </Text>
           <Text fontSize='1.6rem'>
           Roberto Fernandes
           </Text>
         </GridItem>
         <GridItem w='100%' h='100'>
         <Box>
          <Checkbox isDisabled >Funcionário da Associação Educativa Evangélica</Checkbox>
          </Box>
         </GridItem>
         </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
       <Button onPress={navegarParaOutraPasta} label="Voltar"/>
     </Flex>
    ): (
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
      px={6}
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
        <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4'>
          <GridItem w='100%' h='10'>
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Nome completo
            </Text>
            <Text fontSize='1.6rem'>
              Higor Giovane Monteiro Torres
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10'/>
          <GridItem w='100%' h='10' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            CPF
            </Text>
            <Text fontSize='1.6rem'>
              065.127.431-13
            </Text>
            </Box>
            </GridItem>
          <GridItem w='100%' h='10'>
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Data de nascimento
            </Text>
            <Text fontSize='1.6rem'>
              29/04/2005
            </Text>
            </Box>
            </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            E-mail
            </Text>
            <Text fontSize='1.6rem'>
              higorgiovane7@gmail.com
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Telefone
            </Text>
            <Text fontSize='1.6rem'>
              (62) 98519-4415
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Sexo
            </Text>
            <Text fontSize='1.6rem'>
              Feminino
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Estado Civil
            </Text>
            <Text fontSize='1.6rem'>
              Solteiro
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Religião
            </Text>
            <Text fontSize='1.6rem'>
              Católico
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Renda familiar
            </Text>
            <Text fontSize='1.6rem'>
              1 a 3 salários minimos
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Profissão
            </Text>
            <Text fontSize='1.6rem'>
              Professor
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Outro contato
            </Text>
            <Text fontSize='1.6rem'>
              (62) 98456-2216
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Nome do contato/responsável
            </Text>
            <Text fontSize='1.6rem'>
              Pablo Henrique Martins
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box>
          <Checkbox isDisabled>Menor de idade</Checkbox>
          </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' />
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Naturalidade
            </Text>
            <Text fontSize='1.6rem'>
              Anápolis
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Nacionalidade
            </Text>
            <Text fontSize='1.6rem'>
              Brasileira
            </Text>
            </Box>
          </GridItem>
        </Grid>
        <Text 
        color="#787878" 
        fontSize="1.8rem" 
        flexDir="column"
        p='4'
        mt='10'
        >
          Endereço
        </Text>
        <Divider/>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4'>
        <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            CEP
            </Text>
            <Text fontSize='1.6rem'>
              01234-567
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Logradouro
            </Text>
            <Text fontSize='1.6rem'>
              Rua das Flores
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Bairro
            </Text>
            <Text fontSize='1.6rem'>
              Jardim Primavera
            </Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Complemento
            </Text>
            <Text fontSize='1.6rem'>

            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Cidade
            </Text>
            <Text fontSize='1.6rem'>
              Anápolis
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            UF
            </Text>
            <Text fontSize='1.6rem'>
              GO
            </Text>
            </Box>
          </GridItem>
        </Grid>
        <Text 
        color="#787878" 
        fontSize="1.8rem" 
        flexDir="column"
        p='4'
        mt='10'
        >
          Informações de tratamento
        </Text>
        <Divider/>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
        <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Inicio do tratamento
            </Text>
            <Text fontSize='1.6rem'>
              15/03/2023
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Termino do tratamento
            </Text>
            <Text fontSize='1.6rem'>
              15/03/2024
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Quem encaminhou?
            </Text>
            <Text fontSize='1.6rem'>
              Roberto Fernandes
            </Text>
            </Box>
          </GridItem>
          <GridItem/>
          <GridItem w='100%' h='10' mt='9' >
          <Box 
            width='1/4'
            >
            <Text 
            minWidth='18rem'
            maxWidth='18rem'>
            Tipo de tratamento
            </Text>
            <Text fontSize='1.6rem'>
            Gestalt
            </Text>
            </Box>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Checkbox isDisabled>Aluno UniEvangélica</Checkbox>
          </GridItem>
          <GridItem w='100%' h='10' mt='9' >
          <Checkbox isDisabled checked>Funcionário da Associação Educativa Evangélica</Checkbox>
          </GridItem>
        </Grid>
        <Box 
          width={isMobile ? '100%' : '2rem'} 
          px={isMobile ? '0' : '2rem'} 
          mt="4">
            <Button onPress={navegarParaOutraPasta} label="Voltar"/>
          </Box>
      </Flex>
      </Flex>
     )}
  </>
  );
}
