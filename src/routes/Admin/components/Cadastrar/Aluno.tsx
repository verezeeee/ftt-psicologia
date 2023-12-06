import { Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";
import { cadastrarAluno } from "./services";
import axios from "axios";
import { useState, useEffect } from "react";

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
  professor,
  setProfessor,
}) {
  const [professoresOptions, setProfessoresOptions] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const getProfessores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/getProfessoresSelect');
        setProfessoresOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProfessores();
  }, []);

  const handleClickCadastrar = async () => {
    if (!professor) {
      toast({
        status: "error",
        description: "Selecione um professor",
        duration: 500,
      });
      return;
    }

    const regex = /id:(\S+) nomeProfessor:(.*?) disciplina:(.*)/;
    const match = professor.match(regex);

    if (!match) {
      toast({
        status: "error",
        description: "Formato do professor inválido",
        duration: 500,
      });
      return;
    }

    const [, id, nomeProfessor, disciplina] = match;

    if (!matricula) {
      toast({
        status: "error",
        description: "Insira a matrícula do aluno",
        duration: 500,
      });
      return;
    }

    if (!periodo) {
      toast({
        status: "error",
        description: "Insira o período do aluno",
        duration: 500,
      });
      return;
    }

    if (!nome) {
      toast({
        status: "error",
        description: "Insira o nome do Aluno",
        duration: 500,
      });
      return;
    }

    if (!nome.split(" ")[1]) {
      toast({
        status: "error",
        description: "Insira o sobrenome do Aluno",
        duration: 500,
      });
      return;
    }

    if (!cpf) {
      toast({
        status: "error",
        description: "Insira o CPF do Aluno",
        duration: 500,
      });
      return;
    }

    if (!validarCPF(cpf)) {
      toast({
        status: "error",
        description: "Insira um CPF válido",
        duration: 500,
      });
      return;
    }

    if (!telefone) {
      toast({
        status: "error",
        description: "Insira o telefone do Aluno",
        duration: 500,
      });
      return;
    }

    if (telefone.length !== 15) {
      toast({
        status: "error",
        description: "Insira um telefone válido",
        duration: 500,
      });
      return;
    }

    if (!email) {
      toast({
        status: "error",
        description: "Insira o e-mail do Aluno",
        duration: 500,
      });
      return;
    }

    if (!validarEmail(email)) {
      toast({
        status: "error",
        description: "Insira um e-mail válido",
        duration: 500,
      });
      return;
    }

    if (!professor) {
      toast({
        status: "error",
        description: "Insira o professor do aluno",
        duration: 500,
      });
      return;
    } else {
      const response = await cadastrarAluno ({
        matricula,
        periodo,
        nome,
        cpf,
        telefoneContato: telefone,
        email,
        professorID: id,
        professorNome: nomeProfessor,
        professorDisciplina: disciplina,
        role: "student",
      });
      if (response.error) {
        toast({
          status: "error",
          description: response.error,
          duration: 500,
        });
      } else {
        toast({
          status: "success",
          description: "Aluno cadastrado com sucesso",
          duration: 500,
        });
        closeModal();
      }
    }
  };  

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
              "",
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
        <Select
          label="Professor"
          options={[
            { label: "", value: "" },
            ...professoresOptions.map((professor) => ({
              label: professor.nome,
              value: "id:" + professor._id + " nomeProfessor:" + professor.nome + " disciplina:" + professor.disciplina,
            })),
          ]}
          value={professor}
          setValue={setProfessor}

        />
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
  );
}
