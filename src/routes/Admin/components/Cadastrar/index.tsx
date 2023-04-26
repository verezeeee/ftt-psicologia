import React, { useState } from "react";

import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { useMediaQuery } from "../../../../utils/useMediaQuery";

export default function Cadastrar({
  cadastrarOpened,
  setCadastrarOpened,
}: {
  cadastrarOpened: boolean;
  setCadastrarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mobile } = useMediaQuery();

  const [entidadeHover, setEntidadeHover] = useState<string>();

  const [etapa, setEtapa] = useState<
    "selecionar" | "Professor" | "Secretário" | "Aluno"
  >("selecionar");

  const [nome, setNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [disciplina, setDisciplina] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function closeModal() {
    setEtapa("selecionar");
    setEntidadeHover("");
    setCadastrarOpened(false);
  }

  function Entidade({ iconImage, hoverImage, entidade }) {
    return (
      <Flex
        onClick={() => {
          setEtapa(entidade);
        }}
        onMouseOver={() => {
          setEntidadeHover(entidade);
        }}
        onMouseLeave={() => setEntidadeHover("")}
        cursor="pointer"
        flexDir="column"
        align="center"
        justify="center"
        p="4"
        borderRadius={5}
        border="2px solid #C760EB"
        _hover={{
          backgroundColor: "#C760EB",
          color: "#FFF",
          transition: "0.4s",
        }}
        style={{
          height: 150,
          width: mobile ? "100%" : 150,
        }}
        mt={mobile ? 4 : 0}
        color="#868686"
      >
        <Image
          alt={`Cadastrar ${entidade}`}
          src={entidadeHover === entidade ? hoverImage : iconImage}
          style={{
            height: 75,
            width: 75,
          }}
        />
        <Text mt="2" fontSize="1.2rem" fontWeight={600}>
          {entidade}
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <Modal size={mobile ? "xs" : "xl"} isCentered isOpen={cadastrarOpened} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent borderRadius={8}>
          {etapa === "selecionar" && (
            <Flex flexDir="column" p="6" pt="6">
              <Flex align="center" justify="space-between" w="100%">
                <Text color="#333" fontSize={mobile ? "1.5rem" :"2rem"} mr="4">
                  Novo cadastro
                </Text>
                <Button label="Voltar" onPress={closeModal} mt={0.1} filled />
              </Flex>
              <Flex flexDir={mobile ? "column" : "row"} mt={mobile ? "2" : "6"} align="center" justify="space-between">
                <Entidade
                  entidade="Professor"
                  iconImage="/cadastro_professor.png"
                  hoverImage="/cadastro_professor_hover.png"
                />
                <Entidade
                  entidade="Secretário"
                  iconImage="/customer-secretario.png"
                  hoverImage="/customer-secretario_hover.png"
                />
                <Entidade
                  entidade="Aluno"
                  iconImage="/cadastro_aluno.png"
                  hoverImage="/cadastro_aluno_hover.png"
                />
              </Flex>
            </Flex>
          )}
          {etapa === "Professor" && (
            <Flex flexDir="column" p="8" pt="6">
              <Flex align="center" justify="space-between" w="100%">
                <Text color="#787878" fontSize="1.8rem">
                  Cadastro de professor
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
                <Input
                  label="Disciplina"
                  value={disciplina}
                  setValue={setDisciplina}
                />
                <Input label="E-mail" value={email} setValue={setEmail} />
              </Flex>
              <Flex align="center" mt="4" justify="space-between" w="100%">
                <Button
                  label="Cancelar"
                  onPress={() => setEtapa("selecionar")}
                  mt={0.1}
                />
                <Button
                  label="Cadastrar"
                  onPress={closeModal}
                  mt={0.1}
                  filled
                />
              </Flex>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
