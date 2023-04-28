import React, { useEffect, useState } from "react";

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
import EditarAluno from "./Aluno";
import EditarProfessor from "./Professor";
import EditarSecretario from "./Secretario";

export default function Editar({
  role,
  editData,
  editarOpened,
  setEditarOpened,
}: {
  editData?: any;
  role: "admin" | "student" | "secretary" | "professor";
  editarOpened: boolean;
  setEditarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mobile } = useMediaQuery();

  const [entidadeHover, setEntidadeHover] = useState<string>();

  const [nome, setNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [disciplina, setDisciplina] = useState<string>("");
  const [turno, setTurno] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");
  const [periodo, setPeriodo] = useState<string>("");

  function closeModal() {
    setEntidadeHover("");
    setEditarOpened(false);
    setNome("");
    setCPF("");
    setTelefone("");
    setDisciplina("");
    setTurno("");
    setEmail("");
  }

  return (
    <>
      <Modal
        size={mobile ? "xs" : "xl"}
        isCentered
        isOpen={editarOpened}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent borderRadius={8}>
          {role === "professor" && (
            <EditarProfessor
              editData={editData}
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
            />
          )}
          {role === "secretary" && (
            <EditarSecretario
              editData={editData}
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
            />
          )}
          {role === "student" && (
            <EditarAluno
              mobile={mobile}
              closeModal={closeModal}
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
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
