import React from 'react';
import cl from "../styles/ModalAuth.module.css"
import AuthInput from "./UI/authInput/AuthInput";
const ModalAuth = ({children, visible, setVisible}) => {

    const classes = [cl.modalAuth];
    if (visible) {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(" ")}>
            <div>
                <AuthInput type="text"/>
                <AuthInput type="text"/>
                <button>Войти</button>
            </div>
        </div>
    );
};

export default ModalAuth;