import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Cal from './Calendar';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Rending = ({ color }) => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    document.body.style.setProperty('--main-bg-color', color[0]);
  }, [color]);

  return (
    <div>
      <div className='box' style={{background:color[1]}}>
      <button className='setBtn' onClick={() => navigate("/")} style={{ background: color[1] }}>메인</button>
            <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px", background: "#999999" }}>캘린더</button>
            <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px", background: color[1] }}>세팅</button><br />
        <Cal value={value} onChange={onChange} color={color[1]}/>
      </div>
    </div>
  );
};

export default Rending;
