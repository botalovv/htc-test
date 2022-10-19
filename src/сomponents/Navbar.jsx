import React, {useState} from 'react';
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import CustomButtonWhite from "./UI/customButtonWhite/CustomButtonWhite";
import ModalAuth from "./ModalAuth";
import RegButton from "./UI/regButton/RegButton";
import CustomButtonBlack from "./UI/customButtonBlack/CustomButtonBlack";
import ModalRegistration from "./UI/ModalRegistration";

const Navbar = () => {

    const [modal, setModal] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <img className="navbar__logo" src={logo}></img>
                <ul className="navbar__list">
                    <li><Link to="/" className="navbar__link">Главная</Link></li>
                    <li><Link to="/favorites" className="navbar__link">Избранное</Link></li>
                    {/*<li><Link to="/about" className="navbar__link">О проекте</Link></li>*/}
                </ul>
                {/*<span className="navbar__user">Боталов В.</span>*/}
                <RegButton onClick={() => setModal(true)} className="navbar__registration">Регистрация</RegButton>
                <div className="navbar__button">
                    <CustomButtonBlack onClick={() => setModal(true)}>Войти</CustomButtonBlack>
                </div>
                <ModalAuth visible={modal} setVisible={setModal} />
                <ModalRegistration visible={modal} setVisible={setModal}/>
            </nav>
        </header>
    );
};

export default Navbar;