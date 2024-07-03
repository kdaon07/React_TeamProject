import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'
import Cal from './Calendar';
import './style.css';

const Rending = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='box'>
        <button className='setBtn' onClick={() => console.log(value)}>세팅</button><br />
        <Cal value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Rending;