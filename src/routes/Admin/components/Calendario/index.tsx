import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Text } from '@chakra-ui/react'
import styles from "./style/Calendario.module.css"
import Header from '../../../../components/Header'
import Sidebar from '../../../../components/Sidebar'

export default function CalendarPage() {
  return (
    <>
      <div className={styles.calendar_container}>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev today',
            center: 'title',
            right: 'dayGridMonth next'
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'b' }
          ]}
        />
      </div>
    </>
  )
}