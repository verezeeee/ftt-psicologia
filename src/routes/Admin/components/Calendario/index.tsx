import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';

import styles from './style/Calendario.module.css';

export default function CalendarPage() {
  const calendarEl = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
      <Modal isOpen={selectedEvent !== null} onClose={() => setSelectedEvent(null)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedEvent?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Data: {selectedEvent?.start.toISOString()}</p>
            {/* Aqui será o corpo do modal, adicionar aqui um possível editar ou arquivar,
                lógica de se estiver arquivado, demonstrar o motivo, já aconteceu ou cancelado,
                essas coisas. Além disso, adicionar uma sessão de controle, quem é o Aluno orquestrador 
                das sessões, paciente que está sendo consultado, professor regente do aluno, data da sessão, horário,
                e um link para os relatórios desse paciente(se possível o relatório exato dessa consulta). */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setSelectedEvent(null)}>
              Fechar
            </Button>
            {/* Adicione botões ou ações adicionais conforme necessário */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div ref={calendarEl}></div>
    </div>
  );
}
