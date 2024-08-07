import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Settings = ({ color, setColor }) => {
    const [activeButton, setActiveButton] = useState("monthly");
    const navigate = useNavigate();
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    useEffect(() => {
        document.body.style.setProperty('--main-bg-color', color[0]);
    }, [color]);

    return (
        <div className="box" style={{ background: color[1], '--main-bg-color': color[0] }}>
            <button className='setBtn' onClick={() => navigate("/")} style={{ background: color[1] }}>메인</button>
            <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px", background: color[1] }}>캘린더</button>
            <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px", background: "#999999" }}>세팅</button><br />
            <div className="settings-content " style={{ background: color[1] }}>

                <h2>세팅</h2>
                <div className="colors" >
                    <div className="color-input" >
                        <label>배경 색</label>
                        <input type="text" value={color[0]} onChange={(e) => {
                            setColor([e.target.value, color[1]])
                        }} style={{ background: color[1] }} />
                    </div>
                    <div className="color-input">
                        <label>메인 색</label>
                        <input type="text" value={color[1]} onChange={(e) => {
                            setColor([color[0], e.target.value])
                        }} style={{ background: color[1] }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
