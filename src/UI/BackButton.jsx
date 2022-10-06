import React from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/BackButton.scss"

const BackButton = () => {

    const navigate = useNavigate();

    const backButton = () => navigate(-1);

    return (
        <input type="button" onClick={backButton} value="Назад"/>
    );
};

export default BackButton;