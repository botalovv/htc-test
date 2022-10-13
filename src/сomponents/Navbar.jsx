import React from 'react';
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import CustomButtonWhite from "./UI/customButtonWhite/CustomButtonWhite";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <img className="navbar__logo" src={logo}></img>
                <ul className="navbar__list">
                    <li><Link to="/" className="navbar__link">Главная</Link></li>
                    <li><Link to="/favorites" className="navbar__link">Избранное</Link></li>
                    <li><Link to="/about" className="navbar__link">О проекте</Link></li>
                </ul>
                <span className="navbar__user">Боталов В.</span>
                <div className="navbar__button">
                 <CustomButtonWhite>Выйти</CustomButtonWhite>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;