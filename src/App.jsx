import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import data from "./data/data.json"
import { MainPage } from "./pages/MainPaige";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";

function App() {

  const routes = data.map(e => 
    <Route
      path={`/${e.name.toLowerCase()}`}
      element={<MainPage data={e}/>}
    />

  );

  return (
    <>
      <MobileMenuProvider>
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
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
        </BrowserRouter>
      </MobileMenuProvider>
    </>
  )
}

export default App
