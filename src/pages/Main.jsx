import React from 'react';
import "../main.scss";
import Navbar from "../сomponents/Navbar";
import MainSection from "../сomponents/MainSection";
import AuthInput from "../сomponents/UI/authInput/AuthInput";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <AuthInput placeholder="Введите имя или email"/>
            <MainSection/>
        </div>
    );
};

export default Main;