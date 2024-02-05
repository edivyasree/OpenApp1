import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="page" element={<Page />} />
          </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
