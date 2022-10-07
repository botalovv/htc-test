import React from 'react';
import characters from "../images/characters.jpg";
import locations from "../images/locations.jpg";
import episodes from "../images/episodes.jpg";
import "../main.scss";
import {Link} from "react-router-dom";

const MainSection = () => {
    return (
        <section className="main">
            <div className="main__block">
                <Link className="main__link" to="/characters">
                    <img  className="main__image" src={characters} alt=""/>
                    <h3 className="main__title">Персонажи</h3>
                    <p className="main__description">Зайди и познакомься со всеми персонажами вселенной</p>
                </Link>
            </div>
            <div className="main__block">
                <Link className="main__link" to="/locations">
                    <img  className="main__image" src={locations} alt=""/>
                    <h3 className="main__title">Локации</h3>
                    <p className="main__description">Исследуй все локации. Давай же, не будь занудой!</p>
                </Link>
            </div>
            <div className="main__block">
                <Link className="main__link" to="/episodes">
                    <img  className="main__image" src={episodes} alt=""/>
                    <h3 className="main__title">Эпизоды</h3>
                    <p className="main__description">Узнай чуть больше о карте приключений Рика и Морти</p>
                </Link>
            </div>
        </section>
    );
};

export default MainSection;