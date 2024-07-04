import { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Detail = ({ work, setWork, num }) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [Pri, setPri] = useState("");
    const { id } = useParams();
    const date = moment(id, 'YYYYMMDD').format('YYYY년 MM월 DD일');

    return (
        <div>
            <div className='box'>
                <button className='setBtn' onClick={() => navigate("/")}>메인</button>
                <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px" }}>캘린더</button>
                <button className='setBtn' onClick={() => console.log(value)} style={{ left: "250px" }}>세팅</button><br />
                <span className='title'>
                    {date}
                </span>
                <div className="input-container">
                    <input type="text" className="input-field" placeholder="할 일을 입력해주세요" onChange={(e) => {
                        if (e.target.value != null)
                            setText(e.target.value);
                    }} />
                    <select className='btn' onChange={(e) => {
                        if (e.target.value != null)
                            setPri(e.target.value);
                    }}>
                        <option value="">우선순위</option>
                        <option value={3}>높음</option>
                        <option value={2}>중간</option>
                        <option value={1}>낮음</option>
                    </select>
                    <button className="btn" disabled={text == "" || Pri == ""} onClick={() => {
                        setWork([
                            ...work,
                            {
                                check: 0,
                                num: num.current,
                                schedule: text,
                                Priority: Pri,
                                date: id,
                            },
                        ]);
                        num.current++;
                    }}>등록</button>
                </div>
                <ul className='list'>
                    {work.filter(item => item.date == id).map((item, index) => (
                        <li key={index} className='info'>
                            <span className='check'></span>
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
    );
}


export default Detail;