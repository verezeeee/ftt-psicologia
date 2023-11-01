import { AbsoluteCenter, Divider, Flex, Text, useToast, Select, Spacer, Checkbox } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { cadastrarProfessor } from "./services";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";

export default function CadastrarPaciente({
  mobile,
  closeModal,
  nome,
  setNome,
  cpf,
  setCPF,
  datadenascimento,
  setDataDeNascimento,
  telefone,
  setTelefone,
  email,
  setEmail,
  religiao,
  setReligiao,
  profissao,
  setProfissao,
  outrocontato,
  setOutroContato,
  contatoresponsavel,
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
  iniciotratamento,
  setInicioTratamento,
  terminotratamento,
  setTerminoTratamento,
  encaminhador, 
  setEncaminhador,
  tipotratamento,
  setTipoTratamento,
}: {
  mobile: boolean;
  closeModal: () => void;
  nome: string;
  setNome: any;
  cpf: string;
  setCPF: any;
  datadenascimento: string;
  setDataDeNascimento: any;
  telefone: string;
  setTelefone: any;
  email: string;
  setEmail: any;
  setEtapa: any;
  religiao: string;
  setReligiao: any;
  profissao: string;
  setProfissao: any;
  outrocontato: string;
  setOutroContato: any;
  contatoresponsavel: string;
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
  iniciotratamento: string;
  setInicioTratamento: any;
  terminotratamento: string;
  setTerminoTratamento: any;
  encaminhador: string;
  setEncaminhador: any;
  tipotratamento: string;
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
      <Text color="#787878" fontSize="1.8rem" w='100%' textAlign='center'>
          Informações pessoais
        </Text>
      <Flex
        flexDir="column"
        py="4"
        align="center"
        justify="space-between"
        w="100%"
      >
        <Input label="Nome completo" value={nome} setValue={setNome} />
        {mobile ? (
          <Flex
            w="100%"
            flexDir="column"
            align="center"
            justify="space-between"
          >
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
              value={datadenascimento}
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
            <Flex
            mt={4}
            flexDir="column"
            w='100%'>
            Sexo
            <Select 
            placeholder='-'
            border="2px solid #C760EB">
              <option value='option1'>Masculino</option>
              <option value='option2'>Feminino</option>
              <option value='option3'>Outros</option>
            </Select>
            </Flex>
            <Flex
            mt={4}
            w='100%'
            flexDir="column">
            Estado Civil
            <Select 
            placeholder='-'
            border="2px solid #C760EB">
              <option value='option1'>Solteiro</option>
              <option value='option2'>Casado</option>
              <option value='option3'>Divorciado</option>
              <option value='option4'>Viúvo</option>
              <option value='option5'>Separado judicialmente</option>
            </Select>
            </Flex>
            <Input
              label="Religião"
              value={religiao}
              setValue={setReligiao}
              type="string"
            />
            <Flex
            mt={4}
            w='100%'
            flexDir="column">
            Renda familiar
            <Select 
            placeholder='-'
            border="2px solid #C760EB">
              <option value='option1'>Solteiro</option>
              <option value='option2'>Casado</option>
              <option value='option3'>Divorciado</option>
              <option value='option4'>Viúvo</option>
              <option value='option5'>Separado judicialmente</option>
            </Select>
            </Flex>
            <Input
              label="Profissão"
              value={profissao}
              setValue={setProfissao}
              type="string"
            />
            <Input
              label="Outro contato"
              value={outrocontato}
              setValue={setOutroContato}
              type="string"
            />
            <Input
              label="Nome do contato/responsável"
              value={contatoresponsavel}
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
              value={iniciotratamento}
              setValue={setInicioTratamento}
              type="date"
            />
            <Input
              label="Término do tratamento"
              value={terminotratamento}
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
              value={tipotratamento}
              setValue={setTipoTratamento}
              type="string"
            />
            <Checkbox my={4} textAlign="initial" w="100%">Aluno UniEvangélica</Checkbox>
            <Checkbox textAlign="initial" w="100%">Funcionário da Associação Educativa Evangélica</Checkbox>
          </Flex>
        ) : (
          <Flex w="100%" align="center" justify="space-between">
            <Input
              label="CPF"
              mask="000.000.000-00"
              value={cpf}
              setValue={setCPF}
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask=" / /"
              value={datadenascimento}
              setValue={setDataDeNascimento}
            />
          </Flex>
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
                description: "Insira o nome do professor",
                duration: 500,
              });
            } else if (!nome.split(" ")[1]) {
              toast({
                status: "error",
                description: "Insira o sobrenome do professor",
                duration: 500,
              });
            } else if (!cpf) {
              toast({
                status: "error",
                description: "Insira o CPF do professor",
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
                description: "Insira o telefone do professor",
                duration: 500,
              });
            } else if (telefone.length !== 15) {
              toast({
                status: "error",
                description: "Insira um telefone válido",
                duration: 500,
              });
            } else if (!disciplina) {
              toast({
                status: "error",
                description: "Insira a disciplina do professor",
                duration: 500,
              });
            } else if (!email) {
              toast({
                status: "error",
                description: "Insira o e-mail do professor",
                duration: 500,
              });
            } else if (!validarEmail(email)) {
              toast({
                status: "error",
                description: "Insira um e-mail válido",
                duration: 500,
              });
            } else {
              const res = await cadastrarProfessor({
                nome,
                cpf,
                disciplinaMinistrada: disciplina,
                telefoneContato: telefone,
                email,
                disciplina,
                role: "professor",
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
                  description: "Professor cadastrado com sucesso!",
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
