import { Divider, Flex, Text, useToast, Spacer, Checkbox, Grid, GridItem } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { cadastrarPaciente } from "./services";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";
import Select from "../../../../components/Select";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CadastrarPaciente({
  mobile,
  closeModal,
  nome,
  setNome,
  cpf,
  setCPF,
  telefone,
  setTelefone,
  email,
  setEmail,
}) {
  const toast = useToast();
  const [alunoUnieva, setAlunoUnieva] = useState(false);
  const [funcionarioUnieva, setFuncionarioUnieva] = useState(false);
  const [menorDeIdade, setMenorDeIdade] = useState(false);
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [religiao, setReligiao] = useState("");
  const [rendaFamiliar, setRendaFamiliar] = useState("");
  const [profissao, setProfissao] = useState("");
  const [outroContato, setOutroContato] = useState("");
  const [nomeDoContatoResponsavel, setNomeDoContatoResponsavel] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro]= useState("");
  const [bairro, setBairro]= useState("");
  const [complemento, setComplemento]= useState("");
  const [cidade, setCidade]= useState("");
  const [uf, setUf] = useState("");
  const [inicioTratamento, setInicioTratamento]= useState("");
  const [terminoTratamento, setTerminoTratamento]= useState("");
  const [encaminhador, setEncaminhador]= useState("");
  const [tipoDeTratamento, setTipoTratamento]= useState("");
  const [alunosOptions, setAlunosOptions] = useState([]);
  const [aluno] = useState("");
  

  useEffect(() => {
    const getAlunos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/getAlunosSelect');
        setAlunosOptions(response.data);
      } catch (error) {
        toast({
          status: "error",
          description: "Erro ao buscar alunos",
          duration: 1000,
        })
      }
    };

    getAlunos();
  }, []);

  const handleClickCadastrar = async () => {
    if (!aluno) {
      toast({
        status: "error",
        description: "Selecione um Aluno",
        duration: 500,
      });
      return;
    }

    const regex = /id: (\d+) nomeAluno: (.+)/;
    const match = aluno.match(regex);

    if (!match) {
      toast({
        status: "error",
        description: "Formato do aluno inválido",
        duration: 500,
      });
      return;
    }

    const [, id, nomeAluno,] = match;

    if (!nome) {
      toast({
        status: "error",
        description: "Insira o nome do paciente",
        duration: 500,
      });
    } else if (!nome.split(" ")[1]) {
      toast({
        status: "error",
        description: "Insira o sobrenome do paciente",
        duration: 500,
      });
    } else if (!cpf) {
      toast({
        status: "error",
        description: "Insira o CPF do paciente",
        duration: 500,
      });
    } else if (!validarCPF(cpf)) {
      toast({
        status: "error",
        description: "Insira um CPF válido",
        duration: 500,
      });
    } else if (!telefone) {
      toast({
        status: "error",
        description: "Insira o telefone do paciente",
        duration: 500,
      });
    } else if (telefone.length !== 15) {
      toast({
        status: "error",
        description: "Insira um telefone válido",
        duration: 500,
      });
    } else if (!email) {
      toast({
        status: "error",
        description: "Insira o e-mail do paciente",
        duration: 500,
      });
    } else if (!validarEmail(email)) {
      toast({
        status: "error",
        description: "Insira um e-mail válido",
        duration: 500,
      });
    } else {
      const res = await cadastrarPaciente({
        nome,
        cpf,
        dataDeNascimento,
        email,
        telefoneContato: telefone,
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
        // Endereço:
        enderecoCep: cep,
        enderecoLogradouro: logradouro,
        enderecoBairro: bairro,
        enderecoComplemento: complemento,
        enderecoCidade: cidade,
        enderecoUF: uf,
        // Informação de tratamento:
        dataInicioTratamento: inicioTratamento,
        dataTerminoTratamento: terminoTratamento,
        quemEncaminhouID: id,
        quemEncaminhouNome: nomeAluno,
        tipoDeTratamento,
        alunoUnieva,
        funcionarioUnieva,
        role: "paciente"
      });
      if (res.error) {
        toast({
          status: "error",
          description: res.error,
          duration: 500,
        });
      } else {
        toast({
          status: "success",
          description: "Secretário cadastrado com sucesso",
          duration: 500,
        });
        closeModal();
      }
    }
  }
  return (
    <>
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#000000" fontSize="2rem" >
          Cadastro de Paciente
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
            <Divider mt={5}/>
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
            <Divider mt={5}/>
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
            <Select
              label="Aluno encaminhador: "
              options={[
                { label: "", value: "" },
                ...alunosOptions.map((aluno) => ({
                  label:  aluno.nome,
                  value: "id:" + aluno._id + " nomeAluno:" + aluno.nome ,
                })),
              ]}
              value={encaminhador}
              setValue={setEncaminhador}
            />
            <Input
              label="Tipo de tratamento"
              value={tipoDeTratamento}
              setValue={setTipoTratamento}
              type="string"
            />
            <Checkbox my={4} textAlign="initial" w="100%"  isChecked={alunoUnieva} onChange={(e) => setAlunoUnieva(e.target.checked)}>Aluno UniEvangélica</Checkbox>
            <Checkbox textAlign="initial" w="100%" isChecked={funcionarioUnieva} onChange={(e) => setFuncionarioUnieva(e.target.checked)}>Funcionário da Associação Educativa Evangélica</Checkbox>
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
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
              label="E-mail"
              value={email}
              setValue={setEmail}
              type="email"
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
              />
          </GridItem>
          <GridItem w='100%' h='100'>
          <Input
              label="Religião"
              value={religiao}
              setValue={setReligiao}
              type="string"
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
            />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Input
              label="Profissão"
              value={profissao}
              setValue={setProfissao}
              type="string"
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
              />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
                label="Nome do contato/responsável"
                value={nomeDoContatoResponsavel}
                setValue={setNomeDoContatoResponsavel}
                type="string"
              />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Checkbox 
            my={10} 
            textAlign="initial" 
            w="100%">
            Menor de idade
            </Checkbox>
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
           <Input
              label="Naturalidade"
              value={naturalidade}
              setValue={setNaturalidade}
              
            />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Input
              label="Nacionalidade"
              value={nacionalidade}
              setValue={setNacionalidade}
              type="string"
            />
          </GridItem>
         </Grid>
         <Divider mt={2}/>
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
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
              label="Logradouro"
              value={logradouro}
              setValue={setLogradouro}
              type="string"
            />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Input
              label="Bairro"
              value={bairro}
              setValue={setBairro}
              type="string"
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
              label="Complemento"
              value={complemento}
              setValue={setComplemento}
              type="string"
            />
          </GridItem>
          <GridItem w='100%' h='100' >
            <Input
              label="Cidade"
              value={cidade}
              setValue={setCidade}
              type="string"
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
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Select
              label="Aluno encaminhador: "
              options={[
                { label: "", value: "" },
                ...alunosOptions.map((aluno) => ({
                  label:  aluno.nome,
                  value: "id:" + aluno._id + " nomeAluno:" + aluno.nome ,
                })),
              ]}
              value={encaminhador}
              setValue={setEncaminhador}

            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={3}>
            <Input
              label="Tipo de tratamento"
              value={tipoDeTratamento}
              setValue={setTipoTratamento}
              type="string"
            />
          </GridItem>
          <GridItem/>
          <GridItem colSpan={2}>
            <Checkbox
            my={4} 
            textAlign="initial" 
            w="100%"
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
            isChecked={funcionarioUnieva}
            onChange={(e) => setFuncionarioUnieva(e.target.checked)}
            >
            Funcionário da Associação Educativa Evangélica
            </Checkbox>
          </GridItem>
         </Grid>
         </>
        )}        
      </Flex>
      
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label="Cancelar" onPress={closeModal} mt={0.1} />
        <Button
          label="Cadastrar"
          onPress={handleClickCadastrar}
          mt={0.1}
          filled
        />
      </Flex>
    </Flex>
  </>
  );
}
