import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2>Calendario</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <div className="selected-date">
        Fecha seleccionada: {date.toDateString()}
      </div>
    </div>
  );
};

export default CalendarComponent;