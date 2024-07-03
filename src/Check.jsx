import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Check = ({ work, setWork, num, today }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='box'>
                <div>
                    <button className='setBtn' onClick={() => navigate("/")}>메인</button>
                    <button className='setBtn' onClick={() => navigate("/cal")}>캘린더</button>
                    <button className='setBtn' onClick={() => console.log(value)}>세팅</button><br />
                </div>
                <ul className='list'>
                    {work.filter(item => item.date == today).map((item, index) => (
                        <li key={index} className='info'>
                            <span className='check'></span>
                            <span className='schedule' style={{
                                color: item.Priority == 1 ? "black" : (item.Priority == 2 ? "orange" : "red")
                            }}>{item.schedule}</span>
                            <button className="btn2" >수정</button>
                            <button className="btn2" onClick={() => {
                                setWork(work.filter((item2) => item.num !== item2.num));
                            }}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Check;