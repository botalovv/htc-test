import React from 'react';
import logo from "../images/logo.jpg";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <img className="navbar__logo" width="112px" height="112px" src={logo}></img>
                <ul className="navbar__list">
                    <li><a href="/" className="navbar__link">Главная</a></li>
                    <li><a href="/characters" className="navbar__link">Избранное</a></li>
                    <li><a href="/about" className="navbar__link">О проекте</a></li>
                </ul>
                <span className="navbar__user">Боталов В.</span>
                <button className="navbar__button">Выйти</button>
            </nav>
        </header>
    );
};

export default Navbar;