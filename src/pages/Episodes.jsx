import React from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import ModalAuth from "../сomponents/ModalAuth";
import RegButton from "../сomponents/UI/regButton/RegButton";
import ModalRegistration from "../сomponents/UI/ModalRegistration";

const Episodes = () => {
    return (
        <div>
            <Navbar/>
            <BackButton/>
            <ModalRegistration/>
        </div>
    );
};

export default Episodes;