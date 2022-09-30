import React from "react";
import logo from "./images/logo.jpg"
import "./main.css";
function App() {



  return (
  <div>
      <header>
        <img width="112px" height="112px" src={logo}></img>
        <nav className="menu__body">
          <ul className="menu__list">
              <li><a className="menu__link">Главная</a></li>
              <li><a className="menu__link">Главная</a></li>
              <li><a className="menu__link">Главная</a></li>
          </ul>
        </nav>
      </header>
  </div>
  );
}

export default App;
