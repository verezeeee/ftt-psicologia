import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex } from '@chakra-ui/react';
import { MdQueryBuilder } from "react-icons/md";
import ButtonNativo from '../../../../components/Button';
import CadastrarConsulta from './Cadastro_Consulta';
import CalendarioEventos from './CalendarioEventos';
import styles from './style/Calendario.module.css';

export default function CalendarPage() {
  const calendarEl = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cadastrarConsultaOpened, setCadastrarConsultaOpened] = useState(false);
  const [calendarioEventosOpened, setCalendarioEventosOpened] = useState(false);
  const [events, setEvents] = useState([]);
  const isMobile = window.innerWidth <= 768;

  function closeModal() {
    setCadastrarConsultaOpened(false);
    setCalendarioEventosOpened(false);
  }

  const headerToolbarOptions = {
    left: isMobile ? 'prev' : 'prev today',
    center: 'title',
    right: isMobile ? 'next' : 'dayGridWeek dayGridMonth next',
  };

  const footerToolbarOptions = {
    center: isMobile ? 'today' : '',
  };

  const reloadEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/getConsulta');
      setEvents(response.data);
    } catch (error) {
      console.error('Erro ao buscar consultas:', error);
    }
  };

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/getConsulta');
        setEvents(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    };

    fetchConsultas();
  }, []);

  useEffect(() => {
    const locales = [esLocale, ptBrLocale];
    const initialLocale = 'pt-br';

    let calendar = new Calendar(calendarEl.current, {
      plugins: [resourceTimelinePlugin, dayGridPlugin, interactionPlugin, timeGridPlugin],
      headerToolbar: headerToolbarOptions,
      footerToolbar: footerToolbarOptions,
      initialView: isMobile ? 'dayGridDay' : 'dayGridMonth',
      nowIndicator: true,
      selectMirror: true,
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      resources: [
        { id: 'a', title: 'Auditorium A' },
        { id: 'b', title: 'Auditorium B', eventColor: 'purple' },
        { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
      ],
      events: events.map((event) => ({
        title: event.title,
        start: event.start,
        end: event.end,
        local: event.resourceId,
        id: event._id,
        nomePaciente: event.pacienteNome,
        frequencia: event.frequencia,
        observacao: event.observacao,
        tipoConsulta: event.tipoDeConsulta,
      })),
      locales,
      locale: initialLocale,
      eventClick: (info) => {
        setSelectedEvent(info.event);

        if (info.event.title) {
          setCalendarioEventosOpened(true);
        } else {
          setCadastrarConsultaOpened(true);
        }
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [events]);

  return (
    <div className={isMobile ? styles.calendar_container2 : styles.calendar_container}>
      {isMobile && (
        <Flex flexDirection='column'>
          <ButtonNativo
            icon={MdQueryBuilder}
            px={6}
            mt={0.1}
            onPress={() => {
              setCadastrarConsultaOpened(true);
            }}
            label="Nova consulta"
          />
        </Flex>
      )}
      {!isMobile && (
          <ButtonNativo
            icon={MdQueryBuilder}
            px={6}
            mt={0.1}
            onPress={() => {
              setCadastrarConsultaOpened(true);
            }}
            label="Nova consulta"
          />
      )}
      <Modal isOpen={cadastrarConsultaOpened} onClose={closeModal} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2rem">Cadastrar Consulta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CadastrarConsulta closeModal={() => { closeModal(); reloadEvents(); }} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={calendarioEventosOpened} onClose={closeModal} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2rem">Consulta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CalendarioEventos event={selectedEvent} closeModal={closeModal} reloadEvents={reloadEvents} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <div ref={calendarEl}></div>
    </div>
  );
}
