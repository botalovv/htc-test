import React from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import ModalAuth from "../сomponents/ModalAuth";

const Episodes = () => {
    return (
        <div>
            <Navbar/>
            <BackButton/>
            <ModalAuth visible={true}/>
        </div>
    );
};

export default Episodes;