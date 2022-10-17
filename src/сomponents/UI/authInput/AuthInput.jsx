import React from 'react';
import "./AuthInput.scss"
const AuthInput = ({children}) => {
    return (
        <input type="text" className="input__auth" placeholder={children}>
        </input>
    );
};

export default AuthInput;