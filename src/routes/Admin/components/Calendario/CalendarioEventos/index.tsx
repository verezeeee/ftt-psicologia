import React from 'react';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';

const CalendarioEventos = ({ event, closeModal }) => {
    const { title, start, end, resourceId } = event;
  
    // Converte as datas para strings formatadas
    const formattedStartDate = new Date(start).toLocaleString();
    const formattedEndDate = new Date(end).toLocaleString();
  
    const fetchConsultaDetails = async () => {
   
      const consultaDetails = {
        paciente: 'Nome do Paciente',
        tipoDeConsulta: 'Tipo de Consulta',
        observacoes: 'Observações da Consulta',
       
      };
  
      return consultaDetails;
    };
  
    const handleViewDetails = async () => {
      try {
        const details = await fetchConsultaDetails();
        console.log('Detalhes da Consulta:', details);
      } catch (error) {
        console.error('Erro ao buscar detalhes da consulta:', error);
      }
    };
  
    return (
      <Flex flexDir="column" p="4">
        <Text color="#000000" fontSize="1.8rem">
          Consulta
        </Text>
        <Divider mt="2" />
        <Flex flexDir="column" py="4" w="100%">
          <Text fontWeight="bold">Título: {title}</Text>
          <Text>Data de Início: {formattedStartDate}</Text>
          <Text>Data de Término: {formattedEndDate}</Text>
          <Text>Recurso: {resourceId}</Text>
          <Text onClick={handleViewDetails} color="blue.500" cursor="pointer">
            Ver Detalhes da Consulta
          </Text>
        </Flex>
        <Flex align="center" mt="4" justify="space-between" w="100%">
          <Button onClick={closeModal} colorScheme="blue">
            Fechar
          </Button>
        </Flex>
      </Flex>
    );
  };
  
  export default CalendarioEventos;
