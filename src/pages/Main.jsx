import React, {useState} from 'react';
import "../main.scss";
import Navbar from "../сomponents/Navbar";
import MainSection from "../сomponents/MainSection";
import AuthInput from "../сomponents/UI/authInput/AuthInput";
import ModalAuth from "../сomponents/ModalAuth";
import CustomButtonWhite from "../сomponents/UI/customButtonWhite/CustomButtonWhite";

const Main = () => {

    return (
        <div>
            <Navbar/>
            <MainSection/>

        </div>
    );
};

export default Main;