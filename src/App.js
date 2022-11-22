import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./main.scss";
import Main from "./pages/Main";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Error from "./pages/Error";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Favorites from "./pages/Favorites";

function App() {

  return (

    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  );
}

export default App;
