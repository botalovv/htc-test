import React from 'react';
import "./AuthInput.scss"

const AuthInput = ({children, ...props}) => {

    return (
        <input {...props} className="input__auth">{children}</input>
    );
};

export default AuthInput;