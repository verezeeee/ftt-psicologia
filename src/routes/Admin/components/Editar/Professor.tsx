import { Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useState } from "react";
import axios from "axios";
import Sucesso from "../Sucesso";
import { useDisclosure } from "@chakra-ui/react";
import Erro from "../Erro";
import { validarEmail } from "../../../../utils/email";
import { validarCPF } from "../../../../utils/cpf";

export default function EditarProfessor({
    mobile,
    closeModal,
    editData
}) {
  const [nome, setNome] = useState(editData.nome);
  const [cpf, setCPF] = useState(editData.cpf);
  const [telefone, setTelefone] = useState(editData.telefoneContato);
  const [email, setEmail] = useState(editData.email);
  const [disciplina, setDisciplina] = useState(editData.disciplina);
  const [id, setId] = useState(editData._id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [erro, setErro] = useState(false); 
  const [edicaoAtiva, setEdicaoAtiva] = useState(true);
  const toast = useToast();

  const validarDados = () => {
    if (
      nome === editData.nome &&
      cpf === editData.cpf &&
      telefone === editData.telefoneContato &&
      email === editData.email &&
      disciplina === editData.disciplina 
    ) {

     toast({
      status: "error",
      description: "Nenhum dado foi alterado",
      duration: 1500,
     })
      return false;
    }
  
    if (!validarCPF(cpf)) {
      toast({
        status: "error",
        description: "CPF inválido",
        duration: 1500,
       })
      return false;
    }
  
    if (!validarEmail(email)) {
      toast({
        status: "error",
        description: "Email inválido",
        duration: 1500,
       })
      return false;
    }
  
    return true;
  };
  
  const alterar = async () => {
    try {
      if (!validarDados()) {
        return;
      }
  
      const dadosAtualizados = {
        nome,
        cpf,
        telefoneContato: telefone,
        email,
      };
  
      await axios.patch(`http://localhost:8080/auth/attProfessor/${id}`, dadosAtualizados);
      onOpen();
    } catch (error) {
      setErro(true);
    }
  };

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#000000" fontSize="1.8rem">
        {edicaoAtiva ? "Editar cadastro professor" : "Confirmar alterações"}
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
        <Input label="Nome completo" value={nome} setValue={setNome} disabled={edicaoAtiva ? false : true} border={edicaoAtiva ? null : "0px"} />
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
              disabled
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
        <Input label="Disciplina" value={disciplina} setValue={setDisciplina} disabled={edicaoAtiva ? false : true} border={edicaoAtiva ? null : "0px"} />
        <Input label="E-mail" value={email} setValue={setEmail} disabled={edicaoAtiva ? false : true} border={edicaoAtiva ? null : "0px"}/>
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
      <Sucesso mensagem="Cadastro atualizado com sucesso." isOpen={isOpen} onClose={onClose} closeModal={closeModal}/>
      {erro &&  <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />}
      </Flex> 
    </Flex>
  );
}
