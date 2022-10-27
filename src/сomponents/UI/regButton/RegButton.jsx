import React from 'react';
import "./RegButton.scss"

const RegButton = ({children, ...props}) => {

    return (
        <button {...props} className="reg__button">
            {children}
        </button>
    );
};

export default RegButton;