import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar'

import data from "./data/data.json"
import MainPage from "./pages/MainPaige";

function App() {

  //console.log(data.find(p => p.name === "Venus"));

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mercury" element={<MainPage />} />
          <Route path="/venus" element={<MainPage />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
