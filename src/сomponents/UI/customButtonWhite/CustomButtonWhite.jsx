import React from 'react';
import "./CustomButtonWhite.scss"

const CustomButtonWhite = ({ children, ...props}) => {

    return (
        <button {...props} className="whiteButton">
            {children}
        </button>
    );
};

export default CustomButtonWhite;