import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'
import { useNavigate } from 'react-router-dom';

const Cal = ({value, onChange}) => {
  const navigate = useNavigate();

  const ClickDate = (date) => {
    onChange(date);
    const formattedDate = moment(date).format('YYYYMMDD'); // 예: 20240630
    navigate(`/detail/${formattedDate}`);
  };

  return (
    <div>
      <Calendar
        value={value}
        onChange={ClickDate}
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