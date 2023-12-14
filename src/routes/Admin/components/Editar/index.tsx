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
import { useMediaQuery } from "../../../../utils/useMediaQuery";
import EditarAluno from "./Aluno";
import EditarProfessor from "./Professor";
import EditarSecretario from "./Secretario";
import EditarPaciente from "./Paciente";
import EditarConsulta from "./Consulta";

export default function Editar({
  role,
  editData,
  editarOpened,
  setEditarOpened,
  reloadEvents,
  closeModalCalendario,
}: {
  editData?: any;
  role: "admin" | "student" | "secretary" | "professor" | "paciente" | "consulta";
  editarOpened: boolean;
  setEditarOpened: React.Dispatch<React.SetStateAction<boolean>>;
  reloadEvents?: () => void;
  closeModalCalendario?: () => void;
}) {
  const { mobile } = useMediaQuery();

  function closeModal() {
    setEditarOpened(false);
  }

  return (
    <>
      <Modal
        size={role === "paciente" ? "4xl" : (mobile ? "xs" : "xl")}
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
            />
          )}
          {role === "secretary" && (
            <EditarSecretario
              editData={editData}
              mobile={mobile}
              closeModal={closeModal}
            />
          )}
          {role === "student" && (
            <EditarAluno
              mobile={mobile}
              closeModal={closeModal}
              editData={editData}
            />
          )}
          {role === "paciente" && (
            <EditarPaciente
              mobile={mobile}
              closeModal={closeModal}
              editData={editData}
            />
          )}
          {role === "consulta" && (
            <EditarConsulta
              mobile={mobile}
              closeModal={closeModal}
              editData={editData}
              reloadEvents={reloadEvents}
              setEditarOpened={setEditarOpened}
              closeModalCalendario={closeModalCalendario}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
