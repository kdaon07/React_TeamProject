import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'


const Cal = ({value, onChange}) => {
  return (
    <div>
      <Calendar
        value={value}
        onChange={onChange}
        formatMonthYear={(locale, date) => moment(date).format("YYYY년 M월")}
        calendarType="gregory"
        formatShortWeekday={(locale, date) => moment(date).format('ddd')}
        formatDay={(locale, date) => moment(date).format("DD")}
        prev2Label={null}
        next2Label={null}
      ></Calendar>
    </div>
  );
};

export default Cal;