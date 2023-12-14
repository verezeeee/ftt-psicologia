import { Divider, Flex, Text, Box, Grid, GridItem, Checkbox, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useRouter } from 'next/router';
import { PacienteSignUpData } from "../../../../utils/types";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import Editar from "../Editar";
import { MdCreate } from "react-icons/md";
import { formatarTelefone } from "../../../../utils/formatarTelefone";
import Excluir from "../Excluir";

export default function VisualizarPaciente({
  userData: {
    nome,
    cpf,
    dataDeNascimento,
    email,
    telefoneContato,
    sexo,
    estadoCivil,
    religiao,
    rendaFamiliar,
    profissao,
    outroContato,
    nomeDoContatoResponsavel,
    menorDeIdade,
    naturalidade,
    nacionalidade,
    enderecoCep,
    enderecoLogradouro,
    enderecoBairro,
    enderecoComplemento,
    enderecoCidade,
    enderecoUF,
    dataInicioTratamento,
    dataTerminoTratamento,
    quemEncaminhouNome,
    tipoDeTratamento,
    alunoUnieva,
    funcionarioUnieva,
    _id,
  },
  setMobile,
  user,
}: {
  setMobile: (mobile: boolean) => void;
  user: PacienteSignUpData;
  userData?: any;
}) {
  const router = useRouter();

  const navegarParaHome = () => {
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
            <Flex w="100%" flexDir="row" justify="space-between" mt='5rem' />
          </Flex>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="div" flex='1' textAlign='left'>
                    <Text color="#000000" fontSize="1.8rem" flexDir="column" p='4'>
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
                      Estado Civil
                    </Text>
                    <Text fontSize='1.6rem'>
                      {estadoCivil}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Outro contato
                    </Text>
                    <Text fontSize='1.6rem'>
                      {outroContato}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Naturalidade
                    </Text>
                    <Text fontSize='1.6rem'>
                      {naturalidade}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Religião
                    </Text>
                    <Text fontSize='1.6rem'>
                      {religiao}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Nome do contato/responsável
                    </Text>
                    <Text fontSize='1.6rem'>
                      {nomeDoContatoResponsavel}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Nacionalidade
                    </Text>
                    <Text fontSize='1.6rem'>
                      {nacionalidade}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      CPF
                    </Text>
                    <Text fontSize='1.6rem'>
                      {cpf}
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
                      Renda familiar
                    </Text>
                    <Text fontSize='1.6rem'>
                      {rendaFamiliar}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100' alignItems='center' >
                    <Box>
                      <Checkbox isDisabled isChecked={menorDeIdade} >Menor de idade</Checkbox>
                    </Box>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Data de nascimento
                    </Text>
                    <Text fontSize='1.6rem'>
                      {dataDeNascimento}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Sexo
                    </Text>
                    <Text fontSize='1.6rem'>
                      {sexo}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Profissão
                    </Text>
                    <Text fontSize='1.6rem'>
                      {profissao}
                    </Text>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Text color="#000000" fontSize="1.8rem" flexDir="column" p='4'>
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
                      {enderecoCep}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Complemento
                    </Text>
                    <Text fontSize='1.6rem'>
                      {enderecoComplemento}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Logradouro
                    </Text>
                    <Text fontSize='1.6rem'>
                      {enderecoLogradouro}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Cidade
                    </Text>
                    <Text fontSize='1.6rem'>
                      {enderecoCidade}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Bairro
                    </Text>
                    <Text fontSize='1.6rem'>
                      {enderecoBairro}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      UF
                    </Text>
                    <Text fontSize='1.6rem'>
                      {enderecoUF}
                    </Text>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Text color="#000000" fontSize="1.8rem" flexDir="column" p='4'>
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
                      {dataInicioTratamento}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Tipo de tratamento
                    </Text>
                    <Text fontSize='1.6rem'>
                      {tipoDeTratamento}
                    </Text>
                  </GridItem>
                  <GridItem w='100%' h='100'>
                    <Text>
                      Termino do tratamento
                    </Text>
                    <Text fontSize='1.6rem'>
                      {dataTerminoTratamento}
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
                      {quemEncaminhouNome}
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
          <Flex
            display='flex'
            flexDir='row'
            justifyContent='space-between'
            w='100%'
          >
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
              border="2px solid #C30B0B"
              color="#C30B0B"
              _hover={{
                backgroundColor: "#C30B0B",
                opacity: 0.9,
                color: "#FFF",
                transition: "0.3s",
              }}
              width="50%"
            />
          </Flex>
          <Flex
            width='100%'
            flexDir='column'
          >
            <Button onPress={navegarParaHome} label="Voltar" />
          </Flex>
          <Excluir
            isOpen={excluirAberto}
            onClose={fecharExcluir}
            closeModal={fecharExcluir}
            excluirData={{
              _id,
              enderecoCep,
            }}
          />
          <Editar
            role="paciente"
            editData={{
              _id,
              nome,
              cpf,
              dataDeNascimento,
              email,
              telefoneContato,
              sexo,
              estadoCivil,
              religiao,
              profissao,
              outroContato,
              nomeDoContatoResponsavel,
              menorDeIdade,
              naturalidade,
              nacionalidade,
              enderecoCep,
              enderecoLogradouro,
              enderecoBairro,
              enderecoComplemento,
              enderecoCidade,
              enderecoUF,
              dataInicioTratamento,
              dataTerminoTratamento,
              quemEncaminhouNome,
              tipoDeTratamento,
              alunoUnieva,
              funcionarioUnieva,
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
                    fontSize="2rem"
                    flexDir="column"
                    p='4'
                  >
                    Informações sobre paciente
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
            <Text
              color="#000000"
              fontSize="1.8rem"
              flexDir="column"
              p='4'
            >
              Informações pessoais
            </Text>
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
                    {nome}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' />
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
                    {cpf}
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
                    {dataDeNascimento}
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
                    {email}
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
                    {formatarTelefone(telefoneContato)}
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
                    {sexo}
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
                    {estadoCivil}
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
                    {religiao}
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
                    {rendaFamiliar}
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
                    {profissao}
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
                    {outroContato}
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
                    {nomeDoContatoResponsavel}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9' >
                <Box>
                  <Checkbox isDisabled isChecked={menorDeIdade}>Menor de idade</Checkbox>
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
                    {naturalidade}
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
                    {nacionalidade}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Text
              color="#000000"
              fontSize="1.8rem"
              flexDir="column"
              p='4'
              mt='10'
            >
              Endereço
            </Text>
            <Divider />
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
                    {enderecoCep}
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
                    {enderecoLogradouro}
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
                    {enderecoBairro}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
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
                    {enderecoComplemento}
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
                    {enderecoCidade}
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
                    {enderecoUF}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Text
              color="#000000"
              fontSize="1.8rem"
              flexDir="column"
              p='4'
              mt='10'
            >
              Informações de tratamento
            </Text>
            <Divider />
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
                    {dataInicioTratamento}
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
                    {dataTerminoTratamento}
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
                    {quemEncaminhouNome}
                  </Text>
                </Box>
              </GridItem>
              <GridItem />
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
                    {tipoDeTratamento}
                  </Text>
                </Box>
              </GridItem>
              <GridItem w='100%' h='10' mt='9' >
                <Checkbox isDisabled isChecked={alunoUnieva}>Aluno UniEvangélica</Checkbox>
              </GridItem>
              <GridItem w='100%' h='10' mt='9' >
                <Checkbox isDisabled isChecked={funcionarioUnieva}>Funcionário da Associação Educativa Evangélica</Checkbox>
              </GridItem>
            </Grid>
            <Box
              width='100%'
              px={isMobile ? '0' : '2rem'}
              my="4"
              display='flex'
              flexDir='row'
              justifyContent='space-between'
            >
              <Button onPress={navegarParaHome} label="Voltar" />
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
                  enderecoCep,
                }}
              />
              <Editar
                role="paciente"
                editData={{
                  _id,
                  nome,
                  cpf,
                  dataDeNascimento,
                  email,
                  telefoneContato,
                  sexo,
                  estadoCivil,
                  religiao,
                  profissao,
                  outroContato,
                  nomeDoContatoResponsavel,
                  menorDeIdade,
                  naturalidade,
                  nacionalidade,
                  enderecoCep,
                  enderecoLogradouro,
                  enderecoBairro,
                  enderecoComplemento,
                  enderecoCidade,
                  enderecoUF,
                  dataInicioTratamento,
                  dataTerminoTratamento,
                  quemEncaminhouNome,
                  tipoDeTratamento,
                  alunoUnieva,
                  funcionarioUnieva,
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
