import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar'

import data from "./data/data.json"
import MainPage from "./pages/MainPaige";

function App() {

  const routes = data.map(e => 
    <Route
      path={`/${e.name.toLowerCase()}`}
      element={<MainPage data={e}/>}
    />

  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainPage 
                data={data.find(p => p.name.toLowerCase() === "earth")}
              />
            }
          />
          {routes}
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
