import React from 'react';
import logo from "../images/logo.jpg";
import characters from "../images/characters.jpg";
import locations from "../images/locations.jpg";
import episodes from "../images/episodes.jpg";
import "../main.scss";
import Navbar from "../сomponents/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <section className="main">
                <div className="main__block">
                    <a className="main__link" href="/characters">
                    <img  className="main__image" src={characters} alt=""/>
                    <h3 className="main__title">Персонажи</h3>
                    <p className="main__description">Зайди и познакомься со всеми персонажами вселенной</p>
                    </a>
                </div>
                <div className="main__block">
                    <a className="main__link" href="/locations">
                    <img  className="main__image" src={locations} alt=""/>
                    <h3 className="main__title">Локации</h3>
                    <p className="main__description">Исследуй все локации. Давай же, не будь занудой!</p>
                    </a>
                </div>
                <div className="main__block">
                    <a className="main__link" href="/episodes">
                    <img  className="main__image" src={episodes} alt=""/>
                    <h3 className="main__title">Эпизоды</h3>
                    <p className="main__description">Узнай чуть больше о карте приключений Рика и Морти</p>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Main;