import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./main.scss";
import Main from "./pages/Main";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Error from "./pages/Error";
function App() {



  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  );
}

export default App;
