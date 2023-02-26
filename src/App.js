import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes ,Route, } from 'react-router-dom';
import Вход from "./Вход";
import Имяпользователя from "./Имяпользователя";
function App() {
  return (
    <div className="App">
              <Router>
                <Routes>
                  <Route  path="/" element={<Вход/>}/>
                  <Route  path="/Имяпользователя" element={<Имяпользователя />}/>
                </Routes>
              </Router>
    </div>
  )
}

export default App;
