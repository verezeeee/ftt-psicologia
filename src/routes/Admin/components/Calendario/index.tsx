import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { MdQueryBuilder } from "react-icons/md";
import ButtonNativo from '../../../../components/Button';
import CadastrarConsulta from './Cadastro_Consulta';
import styles from './style/Calendario.module.css';

export default function CalendarPage() {
  const calendarEl = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cadastrarConsultaOpened, setCadastrarConsultaOpened] = useState(false);

  useEffect(() => {
    const locales = [esLocale, ptBrLocale];
    const initialLocale = 'pt-br';

    let calendar = new Calendar(calendarEl.current, {
      plugins: [resourceTimelinePlugin, dayGridPlugin, interactionPlugin, timeGridPlugin],
      headerToolbar: {
        left: 'prev today',
        center: 'title',
        right: 'dayGridMonth next',
      },
      initialView: 'dayGridMonth',
      nowIndicator: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      resources: [
        { id: 'a', title: 'Auditorium A' },
        { id: 'b', title: 'Auditorium B', eventColor: 'purple' },
        { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
      ],
      initialEvents: [
        { title: 'TESTE 123', start: new Date(), resourceId: 'b' },
      ],
      locales,
      locale: initialLocale,
      eventClick: (info) => {
        setSelectedEvent(info.event);
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div className={styles.calendar_container}>
      <ButtonNativo
        icon={MdQueryBuilder}
        px={6}
        mt={0.1}
        onPress={() => {
          setCadastrarConsultaOpened(true);
        }}
        label="Nova consulta"
      />
      <Modal isOpen={cadastrarConsultaOpened} onClose={() => setCadastrarConsultaOpened(false)} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2rem">Cadastrar Consulta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CadastrarConsulta />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div ref={calendarEl}></div>
    </div>
  );
}
