import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../node_modules/react-calendar/dist/Calendar.css';

const Calendar2 = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
      ></Calendar>
    </div>
  );
};