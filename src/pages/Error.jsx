import React from 'react';
import logo from "../images/logo.jpg";
import error from "../images/error.jpg"
import "../styles/Error.scss"
import {Link} from "react-router-dom";
const Error = () => {



    return (
        <div className="error">
            <nav>
                <img className="error__logo" src={logo}/>
            </nav>
            <section className="section">
                <img className="section__banner" src={error}/>
                <h3 className="section__title">Упс. Кажется вы заблудились. Только без паники!</h3>
                <p className="section__p">Страница, которую вы ищите не существует, либо была удалена</p>
                <Link to="/">
                <button className="section__button">Домой</button>
                </Link>
            </section>
        </div>
    );
};

export default Error;