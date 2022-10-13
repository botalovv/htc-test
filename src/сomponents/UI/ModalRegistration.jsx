import React from 'react';
import AuthInput from "./authInput/AuthInput";
import cl from "../../styles/ModalAuth.module.css";

const ModalRegistration = ({children, visible, setVisible}) => {

    const classes = [cl.modalAuth];
    if (visible) {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(" ")}>
            <form className={cl.modalMain}>
                <h3 className={cl.modalTitle}>Вход</h3>
                <AuthInput type="text"/>
                <AuthInput type="text"/>
                <AuthInput type="text"/>
                <AuthInput type="text"/>
                <AuthInput type="text"/>
            </form>
        </div>
    );
};

export default ModalRegistration;