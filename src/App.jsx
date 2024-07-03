import Rending from "./Rending.jsx"
import Detail from "./Detail.jsx"
import Check from "./Check.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useRef } from "react"

function App() {
  const [work, setWork] = useState([]);
  const [today, setToday] = useState("");
  const num = useRef(1);

  return (
    <Routes>
      <Route path="/cal" element={<Check work={work} setWork={setWork} num={num} today={today}/>} />
      <Route path="/" element={<Rending setToday={setToday}/>} />
      <Route path="/detail/:id" element={<Detail work={work} setWork={setWork} num={num}/>} />
      
    </Routes>
  )
}

export default App
