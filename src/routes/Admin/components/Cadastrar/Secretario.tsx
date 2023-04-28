import { Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { validarCPF } from "../../../../utils/cpf";
import { validarEmail } from "../../../../utils/email";
import { cadastrarSecretario } from "./services";

export default function CadastrarSecretario({
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
  setEtapa,
}: {
  mobile: boolean;
  closeModal: () => void;
  nome: string;
  setNome: any;
  cpf: string;
  setCPF: any;
  telefone: string;
  setTelefone: any;
  turno: "noturno" | "matutino" | "vespertino";
  setTurno: any;
  email: string;
  setEmail: any;
  setEtapa: any;
}) {
  const toast = useToast();

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#787878" fontSize="1.8rem">
          Cadastro de secretário
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
          label="Turno"
          options={["Matutino", "Vespertino", "Noturno"]}
          value={turno}
          setValue={setTurno}
        />
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
            } else if (!turno) {
              toast({
                status: "error",
                description: "Insira o turno do professor",
                duration: 500,
              });
            } else {
              const res = await cadastrarSecretario({
                nome,
                cpf,
                turno,
                role: "secretary",
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
          }}
          mt={0.1}
          filled
        />
      </Flex>
    </Flex>
  );
}
