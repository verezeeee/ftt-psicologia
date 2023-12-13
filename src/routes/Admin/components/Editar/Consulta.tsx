import { Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useState } from "react";
import axios from "axios";
import Sucesso from "../Sucesso";
import { useDisclosure } from "@chakra-ui/react";
import Erro from "../Erro";

export default function EditarConsulta({
  mobile,
  closeModal,
  editData,
  reloadEvents,
  setEditarOpened,
  closeModalCalendario,
}) {
  const [titulo, setTitulo] = useState(editData.title || "");
  const [inicio, setInicio] = useState(editData.start || "");
  const [fim, setFim] = useState(editData.end || "");
  const [local, setLocal] = useState(editData.extendedProps?.local || "");
  const [nomePaciente, setNomePaciente] = useState(editData.extendedProps?.nomePaciente || "");
  const [frequencia, setFrequencia] = useState(editData.extendedProps?.frequencia || "");
  const [observacao, setObservacao] = useState(editData.extendedProps?.observacao || "");
  const [tipoConsulta, setTipoConsulta] = useState(editData.extendedProps?.tipoConsulta || "");
  const [edicaoAtiva, setEdicaoAtiva] = useState(true);
  const [id, setId] = useState(editData.id || "");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [erro, setErro] = useState(false);
  const toast = useToast();

  const validarDados = () => {
    console.log(editData)
    if (
      titulo === editData.title &&
      local === editData.extendedProps?.local &&
      observacao === editData.extendedProps?.observacao &&
      tipoConsulta === editData.extendedProps?.tipoConsulta
    ) {
      toast({
        status: "error",
        description: "Nenhum dado foi alterado",
        duration: 1500,
      });
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
        title: titulo,
        resourceId: local,
        observacao,
        tipoDeConsulta: tipoConsulta,
      };

      await axios.patch(`http://localhost:8080/auth/attConsulta/${id}`, dadosAtualizados);
      reloadEvents();
      onOpen();
    } catch (error) {
      setErro(true);
    }
  };

  return (
    <Flex flexDir="column" p="8" pt="6">
      <Flex align="center" justify="space-between" w="100%">
        <Text color="#000000" fontSize="1.8rem">
          {edicaoAtiva ? "Editar consulta" : "Confirmar alterações"}
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
        <Input label="Título" value={titulo} setValue={setTitulo} disabled={!edicaoAtiva} />
        <Input label="Local" value={local} setValue={setLocal} disabled={!edicaoAtiva} />
        <Input label="Tipo da consulta:" value={tipoConsulta} setValue={setTipoConsulta} disabled={!edicaoAtiva} />
        <Input label="Observação: " value={observacao} setValue={setObservacao} disabled={!edicaoAtiva} />
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
      <Button
          label={edicaoAtiva ? "Cancelar" : "Voltar"}
          onPress={() => {
            if (edicaoAtiva) {
              setEdicaoAtiva(false);
              setEditarOpened(false);
            } else {
              setEdicaoAtiva(true);
            }
          }}
          mt={0.1}
        />
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
          _hover={edicaoAtiva ? null : {
            backgroundColor: "#fff",
            opacity: 0.9,
            color: "#1ABB2A",
            transition: "0.3s",
            border: "1px solid #1ABB2A",
          }
          }
        />
        <Sucesso mensagem="Consulta atualizada com sucesso." isOpen={isOpen} onClose={closeModalCalendario} closeModal={closeModalCalendario} />
        {erro && <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />}
      </Flex>
    </Flex>
  );
}
