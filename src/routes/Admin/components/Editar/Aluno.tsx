import { Divider, Flex, Text } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";

export default function EditarAluno({
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
}) {
  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#787878" fontSize="1.8rem">
          Editar aluno
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
        <Select
          label="Professor"
          options={[
            "Professor 1",
            "Professor 2",
            "Professor 3",
            "Professor 4",
            "Professor 5",
            "Professor 6",
          ]}
          value={periodo}
          setValue={setPeriodo}
        />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label="Cancelar" onPress={() => {}} mt={0.1} />
        <Button label="Cadastrar" onPress={closeModal} mt={0.1} filled />
      </Flex>
    </Flex>
  );
}
