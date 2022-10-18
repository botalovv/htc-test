import React from 'react';
import "./AuthInput.scss"
const AuthInput = ({children, ...props}) => {
    return (
        <input {...props} type="text" className="input__auth"/>
    );
};

export default AuthInput;