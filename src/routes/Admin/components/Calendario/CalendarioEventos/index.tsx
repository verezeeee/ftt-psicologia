import React, { useState } from 'react';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';
import axios from 'axios';
import Excluir from '../../Excluir';
import Editar from '../../Editar';

interface CalendarioEventosProps {
  event: {
    id: string;
    title: string;
    start: Date;
    end: Date;
    extendedProps: {
      local: string;
      nomePaciente: string;
      frequencia: string;
      observacao: string;
      tipoConsulta: string;
    };
  };
  closeModal: () => void;
  reloadEvents: () => void;
}

const CalendarioEventos: React.FC<CalendarioEventosProps> = ({ event, closeModal, reloadEvents }) => {
  const { id, title, start, end } = event;
  const { local, nomePaciente, frequencia, observacao, tipoConsulta } = event.extendedProps;
  const formattedStartDate = new Date(start).toLocaleString();
  const formattedEndDate = new Date(end).toLocaleString();

  const [showExtendedDetails, setShowExtendedDetails] = useState(false);
  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);  
  const [editarData, setEditarData] = useState(null);

  const handleEditarConsulta = () => {
    setEditarData(event); 
    setIsEditarModalOpen(true);
  };

  const handleExcluirConsulta = async () => {
    setIsExcluirModalOpen(true)
  };

  return (
    <Flex flexDir="column" p="4">
      <Divider />
      <Flex flexDir="column" py="4" w="100%">
        <Text fontWeight="bold">Título: {title}</Text>
        <Text><strong>Data de Início:</strong> {formattedStartDate}</Text>
        <Text><strong>Data de Término:</strong> {formattedEndDate}</Text>
        <Button
          onClick={() => setShowExtendedDetails(!showExtendedDetails)}
          colorScheme="purple"
          mt="3"
        >
          {showExtendedDetails ? 'Esconder Detalhes' : 'Detalhes da Consulta'}
        </Button>
        {showExtendedDetails && (
          <>
            <Flex flexDir='column' my={4}>
              <Text ><strong>Participantes:</strong> {nomePaciente}</Text>
              <Text><strong>Essa consulta irá acontecer:</strong> {frequencia}</Text>
              <Text><strong>Local da consulta:</strong> {local}</Text>
              <Text><strong>O tipo dessa consulta é:</strong> {tipoConsulta}</Text>
              <Text><strong>Observações:</strong> {observacao}</Text>
            </Flex>
            <Flex align="center" mt="4" justify="space-between" w="100%">
              <Button onClick={handleEditarConsulta} colorScheme="green">
                Editar
              </Button>
              <Button onClick={handleExcluirConsulta} colorScheme="red">
                Excluir
              </Button>
            </Flex>
          </>
        )}
      </Flex>
      <Flex align="center" mt="4" justify="space-between" w="100%">
        <Button onClick={closeModal} colorScheme="white" color='#C760EB' border='2px solid #C760EB'>
          Fechar
        </Button>
      </Flex>
      <Editar
        role="consulta" 
        editData={editarData}
        editarOpened={isEditarModalOpen}
        setEditarOpened={setIsEditarModalOpen}
      />
      <Excluir
        isOpen={isExcluirModalOpen}  
        onClose={() => setIsExcluirModalOpen(false) }
        closeModal={closeModal}
        excluirData={{consultaID: id , _id: id}}
        reloadEvents={reloadEvents}
      />
    </Flex>
  );
};

export default CalendarioEventos;
