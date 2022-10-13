import React from 'react';
import "./authInput.scss"
const AuthInput = (props) => {
    return (
        <input className="input__auth">
            {props.children}

        </input>
    );
};

export default AuthInput;