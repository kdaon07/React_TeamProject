import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'
import Cal from './Calendar';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Rending = ({ setToday }) => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  setToday(new Date());
  return (
    <div>
      <div className='box'>
        <div>
          <button className='setBtn' onClick={() => navigate("/")}>메인</button>
          <button className='setBtn' onClick={() => navigate("/cal")}>캘린더</button>
          <button className='setBtn' onClick={() => console.log(value)}>세팅</button><br />
        </div>
        <Cal value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Rending;