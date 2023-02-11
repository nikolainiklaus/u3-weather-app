import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Daily from "./components/Daily"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
