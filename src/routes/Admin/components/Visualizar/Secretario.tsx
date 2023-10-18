import { Divider, Flex, Text, Box, Grid, GridItem, Checkbox } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import { SecretarioSignUpData } from "../../../../utils/types";
import { useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";
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

  const navegarParaOutraPasta = () => {
    router.push('/');
  };

  const [ isMobile] = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      {isMobile ? (
        <Flex flexDir="column" w="100%" ml={isMobile ? 0 : 300} transition="margin-left 0.3s ease" color="#787878">
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Flex flexDir="column" p="0" pt="6" w='100%'>
          <Flex w="100%" flexDir="row" justify="space-between" mt='5rem'>
            <Text color="#787878" fontSize="1.8rem" flexDir="column" p='4'>
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
              Telefone
            </Text>
            <Text fontSize='1.6rem'>
              (62) 98519-4415
            </Text>
          </GridItem>
          <GridItem w='100%' h='100'>
            <Text>
              Turno
            </Text>
            <Text fontSize='1.6rem'>
              Matutino
            </Text>
          </GridItem>
          <GridItem w='100%' h='100'>
            <Text>
              CPF
            </Text>
            <Text fontSize='1.6rem'>
              065.127.1431-13
            </Text>
          </GridItem>
        </Grid>
        <Button onPress={navegarParaOutraPasta} label="Voltar"/>
      </Flex>
      ) : (
        <Flex>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Flex
            flexDir="column"
            w="100%"
            ml={isMobile ? 0 : 300}
            transition="margin-left 0.3s ease"
            color="#787878"
          >
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Flex flexDir="column" p="0" pt="6" w='100%'>
              <Flex w="100%" flexDir="row" justify="space-between" mt='5rem'>
                <Flex display='flex' flexDir='row' justifyContent='space-between' w='100%'>
                  <Text color="#787878" fontSize="1.8rem" flexDir="column" p='4'>
                    Informações sobre secretário
                  </Text>
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
                    Higor Giovane Monteiro Torres
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
                    julianaalvespach@gmail.com
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    Telefone
                  </Text>
                  <Text fontSize='1.6rem'>
                    (62) 98519-4415
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    Turno
                  </Text>
                  <Text fontSize='1.6rem'>
                    Matutino
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9'>
                <Box>
                  <Text>
                    CPF
                  </Text>
                  <Text fontSize='1.6rem'>
                    065.127.1431-13
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Box width={isMobile ? '100%' : '2rem'} px={isMobile ? '0' : '2rem'} mt="4">
              <Button onPress={navegarParaOutraPasta} label="Voltar" />
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
}