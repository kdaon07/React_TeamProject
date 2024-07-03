import Rending from "./Rending.jsx"
import Detail from "./Detail.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useRef } from "react"

function App() {
  const [work, setWork] = useState([]);
  const num = useRef(1);

  return (
    <Routes>
      <Route path="/" element={<Rending work={work} setWork={setWork} num={num}/>} />
      <Route path="/detail/:id" element={<Detail work={work} setWork={setWork} num={num}/>} />
    </Routes>
  )
}

export default App
