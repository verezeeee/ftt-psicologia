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
import CadastrarProfessor from "./Professor";
import CadastrarSecretario from "./Secretario";
import CadastrarAluno from "./Aluno";

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
  const [turno, setTurno] = useState<"noturno" | "matutino" | "vespertino">();
  const [email, setEmail] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");
  const [periodo, setPeriodo] = useState<string>("");
  const [professor, setProfessor] = useState<string>("");

  function closeModal() {
    setEtapa("selecionar");
    setEntidadeHover("");
    setCadastrarOpened(false);
    setNome("");
    setCPF("");
    setTelefone("");
    setDisciplina("");
    setEmail("");
    setProfessor("");
    setMatricula("");
    setPeriodo(undefined);
    setTurno(undefined);
  }

  function Entidade({ iconImage, hoverImage, entidade }) {
    return (
      <>
        {mobile ? (
          <Flex
            onClick={() => {
              setEtapa(entidade);
            }}
            cursor="pointer"
            flexDir="column"
            align="center"
            justify="center"
            p="4"
            borderRadius={5}
            border="2px solid #C760EB"
            style={{
              height: 150,
              width: mobile ? "100%" : 150,
            }}
            mt={mobile ? 4 : 0}
            color="#868686"
          >
            <Image
              alt={`Cadastrar ${entidade}`}
              src={hoverImage}
              style={{
                height: 75,
                width: 75,
              }}
            />
            <Text mt="2" fontSize="1.2rem" fontWeight={600}>
              {entidade}
            </Text>
          </Flex>
        ) : (
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
        )}
      </>
    );
  }

  return (
    <>
      <Modal
        size={mobile ? "xs" : "xl"}
        isCentered
        isOpen={cadastrarOpened}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent borderRadius={8}>
          {etapa === "selecionar" && (
            <Flex flexDir="column" p="6" pt="6">
              <Flex align="center" justify="space-between" w="100%">
                <Text color="#787878" fontSize="1.8rem">
                  Novo cadastro
                </Text>
                <Button label="Voltar" onPress={closeModal} mt={0.1} filled />
              </Flex>

              <Divider mt="2" />
              <Flex
                flexDir={mobile ? "column" : "row"}
                mt={mobile ? "2" : "6"}
                align="center"
                justify="space-between"
              >
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
            <CadastrarProfessor
              mobile={mobile}
              closeModal={closeModal}
              nome={nome}
              setNome={setNome}
              cpf={cpf}
              setCPF={setCPF}
              telefone={telefone}
              setTelefone={setTelefone}
              disciplina={disciplina}
              setDisciplina={setDisciplina}
              email={email}
              setEmail={setEmail}
              setEtapa={setEtapa}
            />
          )}
          {etapa === "Secretário" && (
            <CadastrarSecretario
              mobile={mobile}
              closeModal={closeModal}
              nome={nome}
              setNome={setNome}
              cpf={cpf}
              setCPF={setCPF}
              telefone={telefone}
              setTelefone={setTelefone}
              turno={turno}
              setTurno={setTurno}
              email={email}
              setEmail={setEmail}
              setEtapa={setEtapa}
            />
          )}
          {etapa === "Aluno" && (
            <CadastrarAluno
              mobile={mobile}
              closeModal={closeModal}
              professor={professor}
              setProfessor={setProfessor}
              nome={nome}
              setNome={setNome}
              cpf={cpf}
              setCPF={setCPF}
              telefone={telefone}
              setTelefone={setTelefone}
              matricula={matricula}
              setMatricula={setMatricula}
              periodo={periodo}
              setPeriodo={setPeriodo}
              email={email}
              setEmail={setEmail}
              setEtapa={setEtapa}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
