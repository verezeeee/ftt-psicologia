import { Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";
import { cadastrarAluno } from "./services";
import axios from "axios";

export default function CadastrarAluno({
  mobile,
  closeModal,
  nome,
  setNome,
  matricula,
  setMatricula,
  periodo,
  setPeriodo,
  cpf,
  setCPF,
  telefone,
  setTelefone,
  email,
  setEmail,
  setEtapa,
  professor,
  setProfessor,
}) {
  const toast = useToast();

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#000000" fontSize="2rem">
          Cadastro de aluno
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
        <Flex w="100%" align="center" justify="space-between">
          <Input
            label="Matrícula"
            mask="0000000"
            value={matricula}
            setValue={setMatricula}
          />
          <Flex w={10} />
          <Select
            label="Periodo"
            options={[
              "1º Periodo",
              "2º Periodo",
              "3º Periodo",
              "4º Periodo",
              "5º Periodo",
              "6º Periodo",
              "7º Periodo",
              "8º Periodo",
              "9º Periodo",
              "10º Periodo",
            ]}
            value={periodo}
            setValue={setPeriodo}
          />
        </Flex>
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
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
            />
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
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
            />
          </Flex>
        )}
        <Input label="E-mail" value={email} setValue={setEmail} />
        <Input
          label="Professor"
          value={professor}
          setValue={setProfessor}
        />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label="Cancelar" onPress={closeModal} mt={0.1} />
        <Button
          label="Cadastrar"
          onPress={async () => {
            console.log(cpf)
            if (!matricula) {
              toast({
                status: "error",
                description: "Insira a matrícula do aluno",
                duration: 500,
              });
            } else if (!periodo) {
              toast({
                status: "error",
                description: "Insira o período do aluno",
                duration: 500,
              });
            } else if (!nome) {
              toast({
                status: "error",
                description: "Insira o nome do Aluno",
                duration: 500,
              });
            } else if (!nome.split(" ")[1]) {
              toast({
                status: "error",
                description: "Insira o sobrenome do Aluno",
                duration: 500,
              });
            } else if (!cpf) {
              toast({
                status: "error",
                description: "Insira o CPF do Aluno",
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
                description: "Insira o telefone do Aluno",
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
                description: "Insira o e-mail do Aluno",
                duration: 500,
              });
            } else if (!validarEmail(email)) {
              toast({
                status: "error",
                description: "Insira um e-mail válido",
                duration: 500,
              });
            } else if (!professor) {
              toast({
                status: "error",
                description: "Insira o professor do aluno",
                duration: 500,
              });
            } else {
              // const res = await cadastrarAluno({
              //   nome,
              //   cpf,
              //   periodo,
              //   email,
              //   matricula,
              //   professor,
              //   telefoneContato: telefone,
              //   idOrientador: professor,
              //   periodoCursado: periodo,
              //   role: "student",
              // });
              // if (res.error) {
              //   toast({
              //     status: "error",
              //     description: res.error,
              //     duration: 500,
              //   });
              // } else {
              //   toast({
              //     status: "success",
              //     description: "Secretário cadastrado com sucesso",
              //     duration: 500,
              //   });
              axios.post('http://localhost:8080/auth/registroAluno', {
                matricula,
                periodo,
                nome,
                cpf,
                telefoneContato: telefone,
                email,
                professor,
                role: "student",
              }).then((response) => {
                console.log(response);
                toast({
                  status: "success",
                  description: "Aluno cadastrado com sucesso",
                  duration: 500,
                })
              }, (error) => {
                console.log(error);
                toast({
                  status: "error",
                  description: error.message,
                  duration: 500,
                })
              });
              closeModal();
            }
          }}
          mt={0.1}
          filled
        />
      </Flex>
    </Flex>
  );
}
