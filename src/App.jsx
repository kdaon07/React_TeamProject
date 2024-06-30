import Rending from "./Rending.jsx"
import Detail from "./Detail.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rending/>} />
      <Route path="/detail/:id" element={<Detail/>} />
    </Routes>
  )
}

export default App
