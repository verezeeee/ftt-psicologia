import { Divider, Flex, Text } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { useState } from "react";
import axios from "axios";
import Sucesso from "../Sucesso";
import { useDisclosure } from "@chakra-ui/react";
import Erro from "../Erro";

export default function EditarSecretario({
  mobile,
  closeModal,
  editData,
}) {
  const [nome, setNome] = useState(editData.nome);
  const [cpf, setCPF] = useState(editData.cpf);
  const [telefone, setTelefone] = useState(editData.telefoneContato);
  const [email, setEmail] = useState(editData.email);
  const [turno, setTurno] = useState(editData.turno);
  const [edicaoAtiva, setEdicaoAtiva] = useState(true);
  const [id, setId] = useState(editData._id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [erro, setErro] = useState(false); 

  const alterar = async () => {
    try {
      const dadosAtualizados = {
        nome,
        cpf,
        telefoneContato: telefone,
        email,
        turno,
      };  
      await axios.patch(`http://localhost:8080/auth/attSecretario/${id}`, dadosAtualizados);
      onOpen();
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      setErro(true);
    }
  };

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#000000" fontSize="1.8rem">
           {edicaoAtiva ? "Editar cadastro secretário" : "Confirmar alterações"}
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
        <Input label="Nome completo" value={nome}  setValue={setNome}  disabled={edicaoAtiva ? false : true} border={edicaoAtiva ? null : "0px"}/>
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
              disabled
            />
            <Flex w={10} />
            <Input
              defaultValue={editData.telefone}
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
              disabled={edicaoAtiva ? false : true}
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
              border={edicaoAtiva ? null : "0px"}
            />
            <Flex w={10} />
            <Input
              label="Telefone"
              mask="(00) 00000-0000"
              value={telefone}
              setValue={setTelefone}
              disabled={edicaoAtiva ? false : true}
              border={edicaoAtiva ? null : "0px"}
            />
          </Flex>
        )}
        <Input
          label="E-mail"
          value={email}
          setValue={setEmail}
          disabled={edicaoAtiva ? false : true}
          border={edicaoAtiva ? null : "0px"}
        />
        <Select
          label="Turno"
          options={["Matutino", "Vespertino", "Noturno"]}
          value={turno}
          setValue={setTurno}
          disabled={edicaoAtiva ? false : true}
          border={edicaoAtiva ? null : "0px"}
        />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button label={edicaoAtiva ? "Cancelar" : "Voltar"}  onPress={edicaoAtiva ? closeModal : () => setEdicaoAtiva(true)} mt={0.1} />
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
      _hover={edicaoAtiva ? null: {
              backgroundColor: "#fff",
              opacity: 0.9,
              color: "#1ABB2A",
              transition: "0.3s",
              border: "1px solid #1ABB2A",}
            }
        />
      <Sucesso isOpen={isOpen} onClose={onClose} closeModal={closeModal}/>
      {erro &&  <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />}
      </Flex>
    </Flex>
  );
}
