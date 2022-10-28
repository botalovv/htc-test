import React, {useState} from 'react';
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import ModalAuth from "./ModalAuth";
import RegButton from "./UI/regButton/RegButton";
import CustomButtonBlack from "./UI/customButtonBlack/CustomButtonBlack";
import ModalRegistration from "./UI/ModalRegistration";

const Navbar = () => {

    const [modalActive, setModalActive] = useState(false);

    const [modalRegActive, setModalRegActive] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <img className="navbar__logo" src={logo}></img>
                <ul className="navbar__list">
                    <li><Link to="/" className="navbar__link">Главная</Link></li>
                    {/*<li><Link to="/favorites" className="navbar__link">Избранное</Link></li>*/}
                    <li><Link to="/about" className="navbar__link">О проекте</Link></li>
                </ul>
                {/*<span className="navbar__user">Боталов В.</span>*/}
                <div className="navbar__bttns">
                    <div className="navbar__regButton">
                        <RegButton onClick={() => setModalRegActive(true)}>Регистрация</RegButton>
                    </div>
                    <div className="navbar__button">
                        <CustomButtonBlack onClick={() => setModalActive(true)}>Войти</CustomButtonBlack>
                    </div>
                </div>
            </nav>
            <ModalAuth visible={modalActive} setVisible={setModalActive} />
            <ModalRegistration visible={modalRegActive} setVisible={setModalRegActive}/>
        </header>
    );
};

export default Navbar;