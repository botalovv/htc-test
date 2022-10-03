import React from "react";
import logo from "./images/logo.jpg"
import characters from "./images/characters.jpg"
import locations from "./images/locations.jpg"
import episodes from "./images/episodes.jpg"
import "./main.scss";
function App() {



  return (
  <div>
      <header>
        <nav className="navbar">
            <img className="navbar__logo" width="112px" height="112px" src={logo}></img>
          <ul className="navbar__list">
              <li><a href="/main" className="navbar__link">Главная</a></li>
              <li><a href="/main/favorites" className="navbar__link">Избранное</a></li>
              <li><a href="/about" className="navbar__link">О проекте</a></li>
          </ul>
            <span className="navbar__user">Боталов В.</span>
            <button className="navbar__button">Выйти</button>
        </nav>
      </header>
      <section className="main">
          <div className="main__block">
              <img  className="main__image" src={characters} alt=""/>
              <h3 className="main__title">Персонажи</h3>
              <p className="main__description">Зайди и познакомься со всеми персонажами вселенной</p>
          </div>
          <div className="main__block">
              <img  className="main__image" src={locations} alt=""/>
              <h3 className="main__title">Локации</h3>
              <p className="main__description">Исследуй все локации. Давай же, не будь занудой!</p>
          </div>
          <div className="main__block">
              <img  className="main__image" src={episodes} alt=""/>
              <h3 className="main__title">Эпизоды</h3>
              <p className="main__description">Узнай чуть больше о карте приключений Рика и Морти</p>
          </div>
      </section>
  </div>
  );
}

export default App;
