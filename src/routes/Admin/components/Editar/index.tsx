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

export default function Editar({
  role,
  editData,
  editarOpened,
  setEditarOpened,
}: {
  editData?: any;
  role: "admin" | "student" | "secretary" | "professor" | "paciente";
  editarOpened: boolean;
  setEditarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mobile } = useMediaQuery();

  function closeModal() {
    setEditarOpened(false);
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
        </ModalContent>
      </Modal>
    </>
  );
}
