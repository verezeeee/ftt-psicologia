import { Box, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Button from "../../../../components/Button";
import Sucesso from "../Sucesso";
import Erro from "../Erro";
import axios from "axios";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
  excluirData: any;
  reloadEvents: () => void;
}


const Excluir: React.FC<SuccessModalProps> = ({ isOpen, onClose, closeModal, excluirData, reloadEvents }) => {
  const router = useRouter();
  const [exclusaoConfirmada, setExclusaoConfirmada] = useState(false);
  const [id, setId] = useState(excluirData?._id || '');
  const [erroExclusao, setErroExclusao] = useState(false);
  const [erro, setErro] = useState(false);

  const handleExcluir = async () => {
    try {
      const { turno, disciplina, endereco, periodo, consultaID} = excluirData;

      let type = "";
      if (turno) {
        type = "Secretario";
      } else if (disciplina) {
        type = "Professor";
      } else if (endereco) {
        type = "Paciente";
      } else if (periodo) {
        type = "Aluno";
      } else if(consultaID) {
        type = "Consulta";
      }else {
        type = "default";
      }

      await axios.delete(`http://localhost:8080/auth/delete${type}/${id}`);
      setExclusaoConfirmada(true);
      reloadEvents();
    } catch (error) {
      console.error("Erro ao excluir o usuário:", error);
      setErro(true);
    }
  };


  const handleClose = () => {
    onClose();
    closeModal();
  };

  useEffect(() => {
    setId(excluirData?._id || '');
  }, [excluirData]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody margin={8}>
            <Box textAlign="initial" fontSize="4xl" color="black" fontWeight="medium">
              Confirmação de exclusão!
            </Box>
            <Box textAlign="initial" fontSize="xl" mt="4">
              Deseja realmente excluir o(s) registro(s) selecionado(s)?
            </Box>
          </ModalBody>
          <ModalFooter
            display='flex'
            flexDir='row'
            justifyContent='space-between'
          >
            <Button
              label="Cancelar"
              onPress={handleClose}
            />
            <Button
              label="Excluir"
              bg="white"
              border="2px solid #C30B0B;"
              color="#C30B0B;"
              _hover={{
                backgroundColor: "#C30B0B",
                opacity: 0.9,
                color: "#FFF",
                transition: "0.3s",
              }}
              onPress={handleExcluir}
            />
          </ModalFooter>
          {exclusaoConfirmada && !erroExclusao && (
            <Sucesso mensagem="Registro(s) excluído(s) com sucesso" isOpen={isOpen} onClose={onClose} closeModal={closeModal} />
          )}
          {erroExclusao && (
            <Erro isOpen={erro} onClose={() => setErro(false)} closeModal={() => setErro(false)} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Excluir;
