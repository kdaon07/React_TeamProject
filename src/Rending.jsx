import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Cal from './Calendar';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Rending = ({ color }) => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='box' style={{background:color[1]}}>
        <button className='setBtn' onClick={() => navigate("/")}>메인</button>
        <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px", background: "#999999" }}>캘린더</button>
        <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px" }}>세팅</button><br />
        <Cal value={value} onChange={onChange} color={color}/>
      </div>
    </div>
  );
};

export default Rending;
