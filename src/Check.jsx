import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import moment from 'moment';

const Check = ({ work, setWork, num, today }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const changeRoute = () => {
            setWork(work.filter(item => item.check === 0));
        };
        changeRoute();
    }, [location]);

    function checkBox(num) {
        setWork(prevWork =>
            prevWork.map(item =>
                item.num === num ? { ...item, check: item.check === 1 ? 0 : 1 } : item
            )
        );
    }

    return (
        <div>
            <div className='box'>
                <button className='setBtn' onClick={() => navigate("/")} style={{ background: "#999999" }}>메인</button>
                <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px" }}>캘린더</button>
                <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px" }}>세팅</button><br />
                <span className='title'>
                    내 손 안의 메모장, 투디에 온 걸 환영해요!<br />
                    다가오는 일정을 확인해볼까요?
                </span>
                <div className='listbox'>
                    <ul className='list1'>
                        <b>{moment().add(1, 'days').format("MM월 DD일")}</b>
                        {work.filter(item => item.date == parseInt(today)).map((item, index) => (
                            <li key={index} className='info'>
                                <button className='check' style={{
                                    background: item.check == 1 ? "#999999" : "white",
                                    color: item.check == 1 ? "#999999" : "black",
                                    textDecoration: item.check == 1 ? "line-through" : "none",
                                }} onClick={() => checkBox(item.num)}></button>
                                <span className='schedule' style={{
                                    color: item.Priority == 1 ? "black" : (item.Priority == 2 ? "orange" : "red")
                                }}>{item.schedule}</span>
                                <button className="btn2" onClick={() => {
                                    setWork(work.filter((item2) => item.num !== item2.num));
                                }}>삭제</button>
                            </li>
                        ))}
                    </ul>

                    <ul className='list2'>
                        <b>{moment().add(2, 'days').format("MM월 DD일")}</b>
                        {work.filter(item => item.date == parseInt(today) + 1).map((item, index) => (
                            <li key={index} className='info'>
                                <button className='check' style={{
                                    background: item.check == 1 ? "#999999" : "white",
                                }} onClick={() => checkBox(item.num)}></button>
                                <span className='schedule' style={{
                                    color: item.Priority == 1 ? "black" : (item.Priority == 2 ? "orange" : "red"),
                                }}>{item.schedule}
                                </span>
                                <button className="btn2" onClick={() => {
                                    setWork(work.filter((item2) => item.num !== item2.num));
                                }}>삭제</button>
                            </li>
                        ))}
                    </ul>

                    <ul className='list3'>
                        <b>{moment().add(3, 'days').format("MM월 DD일")}</b>
                        {work.filter(item => item.date == parseInt(today) + 2).map((item, index) => (
                            <li key={index} className='info'>
                                <button className='check' style={{
                                    background: item.check == 1 ? "#999999" : "white",
                                    color: item.check == 1 ? "#999999" : "black",
                                    textDecoration: item.check == 1 ? "line-through" : "none",
                                }} onClick={() => checkBox(item.num)}></button>
                                <span className='schedule' style={{
                                    color: item.Priority == 1 ? "black" : (item.Priority == 2 ? "orange" : "red")
                                }}>{item.schedule}</span>
                                <button className="btn2" onClick={() => {
                                    setWork(work.filter((item2) => item.num !== item2.num));
                                }}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Check;