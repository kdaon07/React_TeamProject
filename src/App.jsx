import Rending from "./Rending.jsx"
import Detail from "./detail.jsx"
import Check from "./Check.jsx"
import moment from 'moment';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import Settings from "./Setting.jsx";

function App() {
  const [work, setWork] = useState([]);
  const [today, setToday] = useState(moment(new Date()).format('YYYYMMDD'));
  const [color, setColor] = useState(["#999999", "#ffffff"]);
  const num = useRef(1);

  return (
    <Routes>
      <Route path="/" element={<Check work={work} setWork={setWork} num={num} today={today} color={color}/>} />
      <Route path="/cal" element={<Rending color={color}/>} />
      <Route path="/detail/:id" element={<Detail work={work} setWork={setWork} num={num} color={color}/>} />
      <Route path="/set" element={<Settings color={color} setColor={setColor}/>} />
    </Routes>
  )
}

export default App
