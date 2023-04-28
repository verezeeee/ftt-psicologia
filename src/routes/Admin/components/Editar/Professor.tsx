import { Divider, Flex, Text } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

export default function EditarProfessor({
  mobile,
  closeModal,
  nome,
  setNome,
  cpf,
  setCPF,
  telefone,
  setTelefone,
  disciplina,
  setDisciplina,
  email,
  setEmail,
  editData,
}) {
  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#787878" fontSize="1.8rem">
          Editar professor
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
        <Input
          label="Nome completo"
          value={nome}
          setValue={setNome}
          defaultValue={editData.nome}
        />
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
              disabled
              defaultValue={editData.cpf}
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
              defaultValue={editData.telefone}
            />
          </Flex>
        ) : (
          <Flex w="100%" align="center" justify="space-between">
            <Input
              label="CPF"
              mask="000.000.000-00"
              value={cpf}
              setValue={setCPF}
              defaultValue={editData.cpf}
              disabled
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
              defaultValue={editData.telefone}
            />
          </Flex>
        )}
        <Input
          label="Disciplina"
          value={disciplina}
          setValue={setDisciplina}
          defaultValue={editData.disciplinaMinistrada}
        />
        <Input
          label="E-mail"
          value={email}
          setValue={setEmail}
          defaultValue={editData.email}
        />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label="Cancelar" onPress={() => {}} mt={0.1} />
        <Button label="Cadastrar" onPress={closeModal} mt={0.1} filled />
      </Flex>
    </Flex>
  );
}
