import React from 'react';
import "../main.scss";
import Navbar from "../сomponents/Navbar";
import MainSection from "../сomponents/MainSection";
import AuthInput from "../сomponents/UI/authInput/AuthInput";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <MainSection/>
        </div>
    );
};

export default Main;