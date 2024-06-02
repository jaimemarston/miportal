// src/components/Home.js
import React from 'react';
import CalendarComponent from './CalendarComponent';


const Calendar = () => {
  return (
    <div>
      <h1>Bienvenido al Calendario</h1>
      <p>Esta es una página para el Calendario</p>
      <CalendarComponent />
    </div>
  );
};

export default Calendar;