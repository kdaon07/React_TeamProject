import Rending from "./Rending.jsx"
import Detail from "./Detail.jsx"
import Check from "./Check.jsx"
import moment from 'moment';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useRef } from "react"

function App() {
  const [work, setWork] = useState([]);
  const [today, setToday] = useState(moment(new Date()).format('YYYYMMDD'));
  const num = useRef(1);

  return (
    <Routes>
      <Route path="/" element={<Check work={work} setWork={setWork} num={num} today={today}/>} />
      <Route path="/cal" element={<Rending/>} />
      <Route path="/detail/:id" element={<Detail work={work} setWork={setWork} num={num}/>} />
    </Routes>
  )
}

export default App
