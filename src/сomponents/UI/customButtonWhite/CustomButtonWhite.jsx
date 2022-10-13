import React from 'react';
import "./CustomButtonWhite.scss"
const CustomButtonWhite = ({ children}) => {
    return (
        <button className="whiteButton">
            {children}
        </button>
    );
};

export default CustomButtonWhite;