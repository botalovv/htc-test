import React from 'react';
import "./CustomButtonBlack.scss"

const CustomButtonBlack = ({children, ...props}) => {
    return (
        <button {...props} className="blackButton">
            {children}
        </button>
    );
};

export default CustomButtonBlack;