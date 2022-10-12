import React from 'react';
import {useNavigate} from "react-router-dom";
import "./BackButton.scss"

const BackButton = () => {

    const navigate = useNavigate();

    const backButton = () => navigate(-1);

    return (
        <div className="back">
            <svg className="back__icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.67 0L15.5 2.829L6.161 12.004L15.5 21.171L12.67 24L0.5 12.004L12.67 0Z" fill="black"/>
            </svg>
            <input className="back__button" type="button" onClick={backButton} value="Назад"/>
        </div>
    );
};

export default BackButton;