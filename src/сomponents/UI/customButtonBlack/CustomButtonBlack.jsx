import React from 'react';
import "./CustomButtonBlack.scss"

const CustomButtonBlack = ({children}) => {
    return (
        <button className="blackButton">
            {children}
        </button>
    );
};

export default CustomButtonBlack;