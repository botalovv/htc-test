import React from 'react';
import "./authInput.scss"
const AuthInput = (props) => {
    return (
        <input>
            {props.children}
        </input>
    );
};

export default AuthInput;