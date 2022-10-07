import React from 'react';
import "../main.scss";
import Navbar from "../сomponents/Navbar";
import MainSection from "../сomponents/MainSection";
import BackButton from "../UI/BackButton";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <MainSection/>
        </div>
    );
};

export default Main;