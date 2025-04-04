import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar'

import data from "./data/data.json"

function App() {

  console.log(data.find(p => p.name === "Venus"));

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/mercury" element={<NavBar />} />
          <Route path="/venus" element={<NavBar />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
