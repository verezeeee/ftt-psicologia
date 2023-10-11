import { Divider, Flex, Text, Box, Spacer, HStack, Checkbox} from "@chakra-ui/react";
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
              Informações do paciente
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
            Nome completo
            </Text>
            <Text fontSize='1.6rem'>
              Higor Giovane
            </Text>
            </Box>  
            <Spacer
            maxW='10rem'
            />
            <Box>
            <Text>
            CPF
            </Text>
            <Text fontSize='1.6rem'>
              123.456.789-01
            </Text>
            </Box>
            <Spacer
            maxW='10rem'
            />
            <Box>
            <Text>
            Data de Nascimento
            </Text>
            <Text fontSize='1.6rem'>
             29/04/2005
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
            <Spacer
            maxW='10rem'
            />
            <Box>
            <Text>
            Telefone
            </Text>
            <Text fontSize='1.6rem'
            >
             62 985194415
            </Text>
            </Box>
            <Spacer
            maxW='10rem'
            />
            <Box>
            <Text>
              Sexo
            </Text>
            <Text fontSize='1.6rem'>
              MAACHO
            </Text>
            </Box>
            <Spacer/>
            <Spacer/>
            </Flex>
            <Flex
            mt='1rem'>
            <Box >
            <Text>
            Estado Civil
            </Text>
            <Text 
            fontSize='1.6rem' 
            minWidth='18rem'
            maxWidth='18rem'>
              
            Solteiro
            </Text>
            </Box>  
            <Spacer/>
            <Box>
            <Text>
            Religião
            </Text>
            <Text fontSize='1.6rem'>
            Católico
            </Text>
            </Box>
            <Spacer/>
            <Box>
            <Text>
            Renda familiar
            </Text>
            <Text fontSize='1.6rem'>
            1 a 3 salários minimos
            </Text>
            </Box>
            <Spacer/>
            <Box>
            <Text>
            Profissão
            </Text>
            <Text fontSize='1.6rem'>
            Professor
            </Text>
            </Box>
            <Spacer/>
            <Spacer/>
            </Flex>
            <Flex>
              <Box
              fontSize='1rem'
              >
                <Text>
                  Outro Contato
                </Text>
                <Text
                fontSize='1.6rem'>
                  (62) 98519-4415
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  Nome de contato/responsável
                </Text>
                <Text
                fontSize='1.6rem'
                >
                  Pablo Henrique Martins
                </Text>
              </Box>
              <Spacer/>
              <Box
              display='flex'
              flexDir='row'
              alignItems='center'
              >
                <Checkbox value='menor'>
                Menor de idade
                </Checkbox> 
              </Box>
              <Spacer/>
            </Flex>
            <Flex>
              <Box
              fontSize='1rem'
              >
                <Text>
                  Naturalidade
                </Text>
                <Text fontSize='1.6rem'>
                  Anápolis
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  Nacionalidade
                </Text>
                <Text fontSize='1.6rem'>
                  Brasileira
                </Text>
              </Box>
              <Spacer/>
              <Spacer/>
            </Flex>
            </Box>
            <Text 
            color="#787878" 
            fontSize="1.8rem" 
            flexDir="column"
            p='4'
            >
              Endereço
            </Text>

            <Divider mt='4'/>
            <Flex 
            p='4'
            >
            <Flex 
            fontSize='1rem'>
              <Box>
                <Text>
                  CEP
                </Text>
                <Text fontSize='1.6rem'>
                  75083-125
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  Logradouro
                </Text>
                <Text fontSize='1.6rem'>
                  Rua das Flores
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  Bairro
                </Text>
                <Text fontSize='1.6rem'>
                  Jardim Primavera
                </Text>
              </Box>
              <Spacer/>
            </Flex>
            <Flex
            fontSize='1rem'>
              <Box>
                <Text>
                  Complemento
                </Text>
                <Text fontSize='1.6rem'>
                  AAAA
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  Cidade
                </Text>
                <Text fontSize='1.6rem'>
                  Anápolis
                </Text>
              </Box>
              <Spacer/>
              <Box>
                <Text>
                  UF
                </Text>
                <Text fontSize='1.6rem'>
                  GO
                </Text>
              </Box>
            </Flex>
            </Flex>


            <Text 
            color="#787878" 
            fontSize="1.8rem" 
            flexDir="column"
            p='4'
            >
              Informações de tratamento
            </Text>

            <Divider mt='4'/>
          
          
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