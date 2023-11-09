import { AbsoluteCenter, Divider, Flex, Text, useToast, Spacer, Checkbox, Grid, GridItem, Box } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { cadastrarPaciente } from "./services";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";
import Select from "../../../../components/Select";

export default function CadastrarPaciente({
  mobile,
  closeModal,
  nome,
  setNome,
  cpf,
  setCPF,
  dataDeNascimento,
  setDataDeNascimento,
  telefone,
  setTelefone,
  email,
  setEmail,
  sexo,
  setSexo,
  estadoCivil,
  setEstadoCivil,
  rendaFamiliar,
  setRendaFamiliar,
  religiao,
  setReligiao,
  profissao,
  setProfissao,
  outroContato,
  setOutroContato,
  contatoResponsavel,
  setContatoResponsavel,
  naturalidade,
  setNaturalidade,
  nacionalidade,
  setNacionalidade,
  cep,
  setCep,
  logradouro,
  setLogradouro,
  bairro,
  setBairro,
  complemento,
  setComplemento,
  cidade,
  setCidade,
  uf,
  setUf,
  inicioTratamento,
  setInicioTratamento,
  terminoTratamento,
  setTerminoTratamento,
  encaminhador, 
  setEncaminhador,
  tipoTratamento,
  setTipoTratamento,
}: {
  mobile: boolean;
  closeModal: () => void;
  nome: string;
  setNome: any;
  cpf: string;
  setCPF: any;
  dataDeNascimento: string;
  setDataDeNascimento: any;
  telefone: string;
  setTelefone: any;
  email: string;
  setEmail: any;
  sexo: string;
  setSexo: any;
  estadoCivil: string;
  setEstadoCivil: any; 
  rendaFamiliar: string;
  setRendaFamiliar: any;
  setEtapa: any;
  religiao: string;
  setReligiao: any;
  profissao: string;
  setProfissao: any;
  outroContato: string;
  setOutroContato: any;
  contatoResponsavel: string;
  setContatoResponsavel: any;
  naturalidade: string;
  setNaturalidade: any;
  nacionalidade: string;
  setNacionalidade: any;
  cep: string;
  setCep: any;
  logradouro: string;
  setLogradouro: any;
  bairro: string;
  setBairro: any;
  complemento: string;
  setComplemento: any;
  cidade: string;
  setCidade: any;
  uf: string;
  setUf: any;
  inicioTratamento: string;
  setInicioTratamento: any;
  terminoTratamento: string;
  setTerminoTratamento: any;
  encaminhador: string;
  setEncaminhador: any;
  tipoTratamento: string;
  setTipoTratamento: any;
}) {
  const toast = useToast();

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#787878" fontSize="1.8rem">
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
          <Text color="#787878" fontSize="1.8rem" w='100%' textAlign='center'>
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
            />
            <Flex w={10} />
            <Input
              label="Data de nascimento"
              value={dataDeNascimento}
              setValue={setDataDeNascimento}
              type="date"
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
            />
            <Select
            label="Sexo"
            options={[
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
                type="string"
              />
              <Input
                label="Nome do contato/responsável"
                value={contatoResponsavel}
                setValue={setContatoResponsavel}
                type="string"
              />
            <Checkbox my={4} textAlign="initial" w="100%">Menor de idade</Checkbox>
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
            <Text color="#787878" fontSize="1.8rem" mt={4} w="100%" textAlign='center'>
              Endereço
            </Text>
            <Input
              label="CEP"
              value={cep}
              setValue={setCep}
              type="string"
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
            <Input
              label="UF"
              value={uf}
              setValue={setUf}
              type="string"
            />
            <Divider mt={5}/>
            <Text color="#787878" fontSize="1.8rem" mt={4} w="100%" textAlign='center'>
            Informações de tratamento
            </Text>
            <Input
              label="Inicio do tratamento"
              value={inicioTratamento}
              setValue={setInicioTratamento}
              type="date"
            />
            <Input
              label="Término do tratamento"
              value={terminoTratamento}
              setValue={setTerminoTratamento}
              type="date"
            />
            <Input
              label="Quem encaminhou?"
              value={encaminhador}
              setValue={setEncaminhador}
              type="string"
            />
            <Input
              label="Tipo de tratamento"
              value={tipoTratamento}
              setValue={setTipoTratamento}
              type="string"
            />
            <Checkbox my={4} textAlign="initial" w="100%">Aluno UniEvangélica</Checkbox>
            <Checkbox textAlign="initial" w="100%">Funcionário da Associação Educativa Evangélica</Checkbox>
          </Flex>
        ) : (
          <>
          <Text color="#787878" fontSize="1.8rem" w='100%' textAlign='initial'>
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
            />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Input
              label="Data de nascimento"
              value={dataDeNascimento}
              setValue={setDataDeNascimento}
              type="date"
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
            />
          </GridItem>
          <GridItem w='100%' h='100'>
          <Select
            label="Sexo"
            options={[
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
                type="string"
              />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
                label="Nome do contato/responsável"
                value={contatoResponsavel}
                setValue={setContatoResponsavel}
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
              type="string"
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
         <Text color="#787878" fontSize="1.8rem" w='100%' textAlign='initial'>
            Endereço
         </Text>
          <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
          <GridItem w='100%' h='100'>
            <Input
              label="CEP"
              value={cep}
              setValue={setCep}
              type="string"
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
          <Text color="#787878" fontSize="1.8rem" w='100%' textAlign='initial'>
          Informações de tratamento
         </Text>
         <Grid templateColumns='repeat(4, 1fr)' gap={6} p='4' >
         <GridItem w='100%' h='100'>
            <Input
              label="Inicio do tratamento"
              value={inicioTratamento}
              setValue={setInicioTratamento}
              type="date"
            />
          </GridItem>
          <GridItem w='100%' h='100'>
            <Input
              label="Término do tratamento"
              value={terminoTratamento}
              setValue={setTerminoTratamento}
              type="date"
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={2}>
            <Input
              label="Quem encaminhou?"
              value={encaminhador}
              setValue={setEncaminhador}
              type="string"
            />
          </GridItem>
          <GridItem w='100%' h='100' colSpan={3}>
            <Input
              label="Tipo de tratamento"
              value={tipoTratamento}
              setValue={setTipoTratamento}
              type="string"
            />
          </GridItem>
          <GridItem/>
          <GridItem colSpan={2}>
            <Checkbox
            my={4} 
            textAlign="initial" 
            w="100%">
            Aluno UniEvangélica
            </Checkbox> 
          </GridItem>
          <GridItem colSpan={2}>
          <Checkbox 
          textAlign="initial"
          w="100%"
          my={4}
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
          onPress={async () => {
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

                role: "paciente",
              });
              if (res.error) {
                toast({
                  status: "error",
                  description: res.error,
                  duration: 500,
                });
                console.log(res.error);
              } else {
                toast({
                  status: "success",
                  description: "Paciente cadastrado com sucesso!",
                  duration: 500,
                });
                closeModal();
              }
            }
          }}
          mt={0.1}
          filled
        />
      </Flex>
    </Flex>
  );
}
