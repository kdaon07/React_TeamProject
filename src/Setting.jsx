import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Settings = () => {
    const [activeButton, setActiveButton] = useState("monthly");
    const navigate = useNavigate();
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="box">
            <button className='setBtn' onClick={() => navigate("/")}>메인</button>
            <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px"}}>캘린더</button>
            <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px", background: "#999999" }}>세팅</button><br />
            <div className="settings-content">

                <h2>세팅</h2>
                <div className="buttons">
                    <button
                        className={activeButton === "monthly" ? "active" : ""}
                        onClick={() => handleButtonClick("monthly")}
                    >
                        월별로 보기
                    </button>
                    <button
                        className={activeButton === "weekly" ? "active" : ""}
                        onClick={() => handleButtonClick("weekly")}
                    >
                        주별로 보기
                    </button>
                </div>
                <div className="colors">
                    <div className="input-container">
                        <label>배경 색</label>
                        <input type="text" value="#999999" className="input-field"/>
                    </div>
                    <div className="input-container" style={{top:"500px"}}>
                        <label>메인 색</label>
                        <input type="text" value="#ffffff" className="input-field"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
