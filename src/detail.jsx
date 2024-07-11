import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Detail = ({ work, setWork, num, color }) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [Pri, setPri] = useState("");
    const { id } = useParams();
    const date = moment(id, 'YYYYMMDD').format('YYYY년 MM월 DD일');
    const [window, setWindow] = useState(false);

    const aibox = () => {
        setTimeout(() => {
            setWindow(true);
        }, 5000);
    };

    useEffect(() => {
        document.body.style.setProperty('--main-bg-color', color[0]);
      }, [color]);

    return (
        <div style={{ position: "relative"}}>

            {
                window &&
                <div className='AIalert' style={{ background: color[1] }}>
                    <b>오늘의 AI 리포트가 날라왔어요!</b>
                    <button className='setBtn2' onClick={() => { navigate(`/ai/${id}`); setWindow(false); }} style={{ background: color[1] }}>보러가기</button>
                </div>
            }
            <div className='box' style={{ background: color[1] }}>
                <button className='setBtn' onClick={() => navigate("/")} style={{ background: color[1] }}>메인</button>
                <button className='setBtn' onClick={() => navigate("/cal")} style={{ left: "150px", background: color[1] }}>캘린더</button>
                <button className='setBtn' onClick={() => navigate("/set")} style={{ left: "250px", background: color[1] }}>세팅</button><br />
                <span className='title'>
                    {date}
                </span>
                <div className="input-container">
                    <input type="text" className="input-field" placeholder="할 일을 입력해주세요" style={{ background: color[1] }} onChange={(e) => {
                        if (e.target.value != null)
                            setText(e.target.value);
                    }} />
                    <select className='btn' onChange={(e) => {
                        if (e.target.value != null)
                            setPri(e.target.value);
                    }} style={{ background: color[1] }}>
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
                        aibox();
                        num.current++;
                    }} style={{ background: color[1] }}>등록</button>
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
                            }} style={{ background: color[1] }}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default Detail;