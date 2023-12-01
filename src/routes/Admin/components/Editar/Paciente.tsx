import { Divider, Flex, Text, AbsoluteCenter, useToast, Spacer, Checkbox, Grid, GridItem, Box } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { useState } from "react";
import axios from "axios";
import Sucesso from "../Sucesso";
import { useDisclosure } from "@chakra-ui/react";
import Erro from "../Erro";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";


export default function EditarPaciente({
  mobile,
  closeModal,
  editData,
}) {
  const [nome, setNome] = useState(editData.nome);
  const [cpf, setCPF] = useState(editData.cpf);
  const [telefone, setTelefone] = useState(editData.telefoneContato);
  const [email, setEmail] = useState(editData.email);
  const [alunoUnieva, setAlunoUnieva] = useState(editData.alunoUnieva);
  const [funcionarioUnieva, setFuncionarioUnieva] = useState(editData.funcionarioUnieva);
  const [menorDeIdade, setMenorDeIdade] = useState(editData.menorDeIdade);
  const [dataDeNascimento, setDataDeNascimento] = useState(editData.dataDeNascimento);
  const [sexo, setSexo] = useState(editData.sexo);
  const [estadoCivil, setEstadoCivil] = useState(editData.estadoCivil);
  const [religiao, setReligiao] = useState(editData.religiao);
  const [rendaFamiliar, setRendaFamiliar] = useState(editData.rendaFamiliar);
  const [profissao, setProfissao] = useState(editData.profissao);
  const [outroContato, setOutroContato] = useState(editData.outroContato);
  const [nomeDoContatoResponsavel, setNomeDoContatoResponsavel] = useState(editData.nomeDoContatoResponsavel);
  const [naturalidade, setNaturalidade] = useState(editData.naturalidade);
  const [nacionalidade, setNacionalidade] = useState(editData.nacionalidade);
  const [cep, setCep] = useState(editData.enderecoCep);
  const [logradouro, setLogradouro] = useState(editData.enderecoLogradouro);
  const [bairro, setBairro] = useState(editData.enderecoBairro);
  const [complemento, setComplemento] = useState(editData.enderecoComplemento);
  const [cidade, setCidade] = useState(editData.enderecoCidade);
  const [uf, setUf] = useState(editData.enderecoUF);
  const [inicioTratamento, setInicioTratamento] = useState(editData.dataInicioTratamento);
  const [terminoTratamento, setTerminoTratamento] = useState(editData.dataTerminoTratamento);
  const [encaminhador, setEncaminhador] = useState(editData.quemEncaminhou);
  const [tipoDeTratamento, setTipoTratamento] = useState(editData.tipoDeTratamento);
  const [edicaoAtiva, setEdicaoAtiva] = useState(true);
  const [id, setId] = useState(editData._id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [erro, setErro] = useState(false);
  const toast = useToast();

  const validarDados = () => {
    if (
      nome === editData.nome &&
      cpf === editData.cpf &&
      telefone === editData.telefoneContato &&
      email === editData.email &&
      alunoUnieva === editData.alunoUnieva &&
      funcionarioUnieva === editData.funcionarioUnieva &&
      menorDeIdade === editData.menorDeIdade &&
      dataDeNascimento === editData.dataDeNascimento &&
      sexo === editData.sexo &&
      estadoCivil === editData.estadoCivil &&
      religiao === editData.religiao &&
      rendaFamiliar === editData.rendaFamiliar &&
      profissao === editData.profissao &&
      outroContato === editData.outroContato &&
      nomeDoContatoResponsavel === editData.nomeDoContatoResponsavel &&
      naturalidade === editData.naturalidade &&
      nacionalidade === editData.nacionalidade &&
      cep === editData.enderecoCep &&
      logradouro === editData.enderecoLogradouro &&
      bairro === editData.enderecoBairro &&
      complemento === editData.enderecoComplemento &&
      cidade === editData.enderecoCidade &&
      uf === editData.enderecoUF &&
      inicioTratamento === editData.dataInicioTratamento &&
      terminoTratamento === editData.dataTerminoTratamento &&
      encaminhador === editData.quemEncaminhou &&
      tipoDeTratamento === editData.tipoDeTratamento
    ) {

      toast({
        status: "error",
        description: "Nenhum dado foi alterado",
        duration: 1500,
      })
      return false;
    }

    if (!validarCPF(cpf)) {
      toast({
        status: "error",
        description: "CPF inválido",
        duration: 1500,
      })
      return false;
    }

    if (!validarEmail(email)) {
      toast({
        status: "error",
        description: "Email inválido",
        duration: 1500,
      })
      return false;
    }

    return true;
  };

  const alterar = async () => {
    try {
      if (!validarDados()) {
        return;
      }
      const dadosAtualizados = {
        nome,
        cpf,
        email,
        telefoneContato: telefone,
        dataDeNascimento,
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
        enderecoCep: cep,
        enderecoLogradouro: logradouro,
        enderecoBairro: bairro,
        enderecoComplemeneto: complemento,
        enderecoCidade: cidade,
        enderecoUF: uf,
        dataInicioTratament: inicioTratamento,
        dataTerminoTratamento: terminoTratamento,
        quemEncaminhou: encaminhador,
        tipoDeTratamento,
        alunoUnieva,
        funcionarioUnieva,
      };
      await axios.patch(`http://localhost:8080/auth/attPaciente/${id}`, dadosAtualizados);
      onOpen();
    } catch (error) {
      setErro(true);
    }
  };

  return (
    <>
      <Flex flexDir="column" p="8" pt="6">
        <Flex align="center" justify="space-between" w="100%">
          <Text color="#000000" fontSize="2rem" >
            Editar Paciente
          </Text>
        </Flex>
        <Divider mt="2" />
        <Flex
          flexDir="column"
          py="4"
          align="center"
          justify="space-between"
          w="100%"
        >
          {mobile ? (

            <Flex
              w="100%"
              flexDir="column"
              align="center"
              justify="space-between"
            >
              <Text color="#000000" fontSize="1.8rem" w='100%' textAlign='center'>
                Informações pessoais
              </Text>
              <Input
                label="Nome completo"
                value={nome}
                setValue={setNome}

              />
              <Input
                label="CPF"
                mask="000.000.000-00"
                value={cpf}
                setValue={setCPF}
                type="tel"
                placeholder="000.000.000-00"
              />
              <Flex w={10} />
              <Input
                label="Data de nascimento"
                value={dataDeNascimento}
                setValue={setDataDeNascimento}
                type="string"
                mask="00/00/0000"
                placeholder="00/00/0000"
              />
              <Input
                label="E-mail"
                value={email}
                setValue={setEmail}
                type="email"
              />
              <Input
                label="Telefone"
                value={telefone}
                setValue={setTelefone}
                type="tel"
                mask="(00) 00000-0000"
                placeholder="(00) 00000-0000"
              />
              <Select
                label="Sexo"
                options={[
                  "",
                  "Feminino",
                  "Masculino",
                  "Outros",
                ]}
                value={sexo}
                setValue={setSexo}
              />
              <Select
                label="Estado Civil"
                options={[
                  "",
                  "Solteiro",
                  "Casado",
                  "Divorciado",
                  "Viúvo",
                  "Separado judicialmente",
                ]}
                value={estadoCivil}
                setValue={setEstadoCivil}
              />
              <Input
                label="Religião"
                value={religiao}
                setValue={setReligiao}
                type="string"
              />
              <Select
                label="Renda Familiar"
                options={[
                  "",
                  "1 a 3 salários minimos",
                  "3 a 5 salários minimos",
                  "5 a 7 salários minimos",
                  "Mais que 7 salários minimos",
                ]}
                value={rendaFamiliar}
                setValue={setRendaFamiliar}
              />
              <Input
                label="Profissão"
                value={profissao}
                setValue={setProfissao}
                type="string"
              />
              <Input
                label="Outro contato"
                value={outroContato}
                setValue={setOutroContato}
                type="tel"
                mask="(00) 00000-0000"
                placeholder="(00) 00000-0000"
              />
              <Input
                label="Nome do contato/responsável"
                value={nomeDoContatoResponsavel}
                setValue={setNomeDoContatoResponsavel}
                type="string"
              />
              <Checkbox my={4} textAlign="initial" w="100%" isChecked={menorDeIdade} onChange={(e) => setMenorDeIdade(e.target.checked)}>Menor de idade</Checkbox>
              <Input
                label="Naturalidade"
                value={naturalidade}
                setValue={setNaturalidade}
                type="string"
              />
              <Input
                label="Nacionalidade"
                value={nacionalidade}
                setValue={setNacionalidade}
                type="string"
              />
              <Divider mt={5} />
              <Text color="#000000"
                fontSize="1.8rem"
                mt={4}
                w="100%"
                textAlign='center'>
                Endereço
              </Text>
              <Input
                label="CEP"
                value={cep}
                setValue={setCep}
                type="string"
                mask="00000-000"
                placeholder="00000-000"
              />
              <Input
                label="Logradouro"
                value={logradouro}
                setValue={setLogradouro}
                type="string"
              />
              <Input
                label="Bairro"
                value={bairro}
                setValue={setBairro}
                type="string"
              />
              <Input
                label="Complemento"
                value={complemento}
                setValue={setComplemento}
                type="string"
              />
              <Input
                label="Cidade"
                value={cidade}
                setValue={setCidade}
                type="string"
              />
              <Select
                label="UF"
                options={[
                  "",
                  "AC",
                  "AL",
                  "AP",
                  "AM",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MT",
                  "MS",
                  "MG",
                  "PA",
                  "PB",
                  "PR",
                  "PE",
                  "PI",
                  "RJ",
                  "RN",
                  "RS",
                  "RO",
                  "RR",
                  "SC",
                  "SP",
                  "SE",
                  "TO"
                ]}
                value={uf}
                setValue={setUf}
              />
              <Divider mt={5} />
              <Text color="#000000" fontSize="1.8rem" mt={4} w="100%" textAlign='center'>
                Informações de tratamento
              </Text>
              <Input
                label="Inicio do tratamento"
                value={inicioTratamento}
                setValue={setInicioTratamento}
                type="string"
                mask="00/00/0000"
                placeholder="00/00/0000"
              />
              <Input
                label="Término do tratamento"
                value={terminoTratamento}
                setValue={setTerminoTratamento}
                type="string"
                mask="00/00/0000"
                placeholder="00/00/0000"
              />
              <Input
                label="Quem encaminhou?"
                value={encaminhador}
                setValue={setEncaminhador}
                type="string"
              />
              <Input
                label="Tipo de tratamento"
                value={tipoDeTratamento}
                setValue={setTipoTratamento}
                type="string"
              />
              <Checkbox my={4} textAlign="initial" w="100%" isChecked={alunoUnieva} onChange={(e) => setAlunoUnieva(e.target.checked)}>Aluno UniEvangélica</Checkbox>
              <Checkbox textAlign="initial" w="100%" isChecked={funcionarioUnieva} onChange={(e) => setFuncionarioUnieva(e.target.checked)}>Funcionário da Associação Educativa Evangélica</Checkbox>
              <Flex
                w='100%'
                display='flex'
                flexDir='column'
                justifyContent='space-between'
                m={5}
              >
                <Button label={edicaoAtiva ? "Cancelar" : "Voltar"} onPress={edicaoAtiva ? closeModal : () => setEdicaoAtiva(true)} mt={0.1} />
                <Button

                  label={edicaoAtiva ? "Confirmar" : "Editar"}
                  onPress={() => {
                    if (edicaoAtiva) {
                      setEdicaoAtiva(false);
                    } else {
                      setEdicaoAtiva(true);
                      alterar();
                    }
                  }}
                  mt={4}
                  filled
                  bg={edicaoAtiva ? null : "#1ABB2A"}
                  border={edicaoAtiva ? null : "#1ABB2A"}
                  _hover={edicaoAtiva ? null : {
                    backgroundColor: "#fff",
                    opacity: 0.9,
                    color: "#1ABB2A",
                    transition: "0.3s",
                    border: "1px solid #1ABB2A",
                  }
                  }
                />
              </Flex>
              <Sucesso mensagem="Cadastro atualizado com sucesso." isOpen={isOpen} onClose={onClose} closeModal={closeModal} />
              {erro && <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />}

            </Flex>
          ) : (
            <>
              <Text color="#000000" fontSize="1.8rem" w='100%' textAlign='initial'>
                Informações pessoais
              </Text>
              <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Nome completo"
                    value={nome}
                    setValue={setNome}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="CPF"
                    mask="000.000.000-00"
                    value={cpf}
                    setValue={setCPF}
                    type="string"
                    placeholder="000.000.000-00"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Data de nascimento"
                    value={dataDeNascimento}
                    setValue={setDataDeNascimento}
                    type="string"
                    mask="00/00/0000"
                    placeholder="00/00/0000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="E-mail"
                    value={email}
                    setValue={setEmail}
                    type="email"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Telefone"
                    value={telefone}
                    setValue={setTelefone}
                    type="tel"
                    mask="(00) 00000-0000"
                    placeholder="(00) 00000-0000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Select
                    label="Sexo"
                    options={[
                      "",
                      "Feminino",
                      "Masculino",
                      "Outros",
                    ]}
                    value={sexo}
                    setValue={setSexo}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' >
                  <Select
                    label="Estado Civil"
                    options={[
                      "",
                      "Solteiro",
                      "Casado",
                      "Divorciado",
                      "Viúvo",
                      "Separado judicialmente",
                    ]}
                    value={estadoCivil}
                    setValue={setEstadoCivil}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Religião"
                    value={religiao}
                    setValue={setReligiao}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Select
                    label="Renda Familiar"
                    options={[
                      "",
                      "1 a 3 salários minimos",
                      "3 a 5 salários minimos",
                      "5 a 7 salários minimos",
                      "Mais que 7 salários minimos",
                    ]}
                    value={rendaFamiliar}
                    setValue={setRendaFamiliar}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Profissão"
                    value={profissao}
                    setValue={setProfissao}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={1}>
                  <Input
                    label="Outro contato"
                    value={outroContato}
                    setValue={setOutroContato}
                    type="tel"
                    mask="(00) 00000-0000"
                    placeholder="(00) 00000-0000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Nome do contato/responsável"
                    value={nomeDoContatoResponsavel}
                    setValue={setNomeDoContatoResponsavel}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Checkbox
                    my={10}
                    textAlign="initial"
                    w="100%"
                    disabled={edicaoAtiva ? false : true}
                    onChange={(e) => setMenorDeIdade(e.target.checked)}
                  >
                    Menor de idade
                  </Checkbox>
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Naturalidade"
                    value={naturalidade}
                    setValue={setNaturalidade}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Nacionalidade"
                    value={nacionalidade}
                    setValue={setNacionalidade}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
              </Grid>
              <Divider mt={2} />
              <Text color="#000000"
                fontSize="1.8rem"
                w='100%'
                textAlign='initial'
              >
                Endereço
              </Text>
              <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
                <GridItem w='100%' h='100'>
                  <Input
                    label="CEP"
                    value={cep}
                    setValue={setCep}
                    type="string"
                    mask="00000-000"
                    placeholder="00000-000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Logradouro"
                    value={logradouro}
                    setValue={setLogradouro}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Bairro"
                    value={bairro}
                    setValue={setBairro}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Complemento"
                    value={complemento}
                    setValue={setComplemento}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' >
                  <Input
                    label="Cidade"
                    value={cidade}
                    setValue={setCidade}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Select
                    label="Estado Civil"
                    options={[
                      "",
                      "AC",
                      "AL",
                      "AP",
                      "AM",
                      "BA",
                      "CE",
                      "DF",
                      "ES",
                      "GO",
                      "MA",
                      "MT",
                      "MS",
                      "MG",
                      "PA",
                      "PB",
                      "PR",
                      "PE",
                      "PI",
                      "RJ",
                      "RN",
                      "RS",
                      "RO",
                      "RR",
                      "SC",
                      "SP",
                      "SE",
                      "TO"
                    ]}
                    value={uf}
                    setValue={setUf}
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
              </Grid>
              <Divider
                mt={2}
              />
              <Text color="#000000" fontSize="1.8rem" w='100%' textAlign='initial'>
                Informações de tratamento
              </Text>
              <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
                <GridItem w='100%' h='100'>
                  <Input
                    label="Inicio do tratamento"
                    value={inicioTratamento}
                    setValue={setInicioTratamento}
                    type="string"
                    mask="00/00/0000"
                    placeholder="00/00/0000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100'>
                  <Input
                    label="Término do tratamento"
                    value={terminoTratamento}
                    setValue={setTerminoTratamento}
                    type="string"
                    mask="00/00/0000"
                    placeholder="00/00/0000"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={2}>
                  <Input
                    label="Quem encaminhou?"
                    value={encaminhador}
                    setValue={setEncaminhador}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem w='100%' h='100' colSpan={3}>
                  <Input
                    label="Tipo de tratamento"
                    value={tipoDeTratamento}
                    setValue={setTipoTratamento}
                    type="string"
                    disabled={edicaoAtiva ? false : true}
                    border={edicaoAtiva ? null : "0px"}
                  />
                </GridItem>
                <GridItem />
                <GridItem colSpan={2}>
                  <Checkbox
                    my={4}
                    textAlign="initial"
                    w="100%"
                    disabled={edicaoAtiva ? false : true}
                    isChecked={alunoUnieva}
                    onChange={(e) => setAlunoUnieva(e.target.checked)}
                  >
                    Aluno UniEvangélica
                  </Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                  <Checkbox
                    textAlign="initial"
                    w="100%"
                    my={4}
                    disabled={edicaoAtiva ? false : true}
                    isChecked={funcionarioUnieva}
                    onChange={(e) => setFuncionarioUnieva(e.target.checked)}
                  >
                    Funcionário da Associação Educativa Evangélica
                  </Checkbox>
                </GridItem>
              </Grid>
              <Flex align="center" mt="4" justify="space-between" w="100%">
                <Button label={edicaoAtiva ? "Cancelar" : "Voltar"} onPress={edicaoAtiva ? closeModal : () => setEdicaoAtiva(true)} mt={0.1} />
                <Button
                  label={edicaoAtiva ? "Confirmar" : "Editar"}
                  onPress={() => {
                    if (edicaoAtiva) {
                      setEdicaoAtiva(false);
                    } else {
                      setEdicaoAtiva(true);
                      alterar();
                    }
                  }}
                  mt={0.1}
                  filled
                  bg={edicaoAtiva ? null : "#1ABB2A"}
                  border={edicaoAtiva ? null : "#1ABB2A"}
                  _hover={edicaoAtiva ? null : {
                    backgroundColor: "#fff",
                    opacity: 0.9,
                    color: "#1ABB2A",
                    transition: "0.3s",
                    border: "1px solid #1ABB2A",
                  }
                  }
                />
                <Sucesso mensagem="Cadastro atualizado com sucesso." isOpen={isOpen} onClose={onClose} closeModal={closeModal} />
                {erro && <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}
