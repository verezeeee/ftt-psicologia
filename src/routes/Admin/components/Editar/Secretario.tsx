import { Divider, Flex, Text } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { formatarTelefone } from "../../../../utils/formatarTelefone";
import { formatarCPF } from "../../../../utils/cpf";

export default function EditarSecretario({
  mobile,
  closeModal,
  nome,
  setNome,
  cpf,
  setCPF,
  telefone,
  setTelefone,
  turno,
  setTurno,
  email,
  setEmail,
  editData,
}) {
  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#787878" fontSize="1.8rem">
          Editar secretário
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
        <Input label="Nome completo" value={nome} setValue={setNome} defaultValue={editData.nome} />
        {mobile ? (
          <Flex
            w="100%"
            flexDir="column"
            align="center"
            justify="space-between"
          >
            <Input
              defaultValue={editData.cpf}
              label="CPF"
              mask="000.000.000-00"
              value={cpf}
              setValue={setCPF}
            />
            <Flex w={10} />
            <Input
              defaultValue={editData.telefone}
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
            />
          </Flex>
        ) : (
          <Flex w="100%" align="center" justify="space-between">
            <Input
              disabled
              label="CPF"
              mask="000.000.000-00"
              value={cpf}
              setValue={setCPF}
              defaultValue={formatarCPF(String(editData.cpf))}
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
              defaultValue={formatarTelefone(String(editData.telefone))}
            />
          </Flex>
        )}
        <Input
          label="E-mail"
          value={email}
          setValue={setEmail}
          defaultValue={editData.email}
        />
        <Select
          label="Turno"
          options={["Matutino", "Vespertino", "Noturno"]}
          value={turno}
          setValue={setTurno}
        />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label="Cancelar" onPress={closeModal} mt={0.1} />
        <Button label="Salvar" onPress={closeModal} mt={0.1} filled />
      </Flex>
    </Flex>
  );
}
