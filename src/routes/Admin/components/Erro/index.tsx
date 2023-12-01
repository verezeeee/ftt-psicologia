import React from "react";
import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react";
import { useRouter } from 'next/router';  // Importe o hook useRouter

interface ErroModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
}

const Erro: React.FC<ErroModalProps> = ({ isOpen, onClose, closeModal }) => {
  const router = useRouter();

  const handleFechar = () => {
    onClose();
    closeModal();

    router.push('/');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
      <ModalOverlay />
      <ModalContent>
        <ModalBody margin={8}>
          <Box textAlign="center" fontSize="4xl" color="red.500">
            Erro!
          </Box>
          <Box textAlign="center" fontSize="lg" mt="4">
            Houve um erro ao atualizar os dados, tente novamente.
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="red" onClick={handleFechar}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Erro;
