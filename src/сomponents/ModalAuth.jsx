import React from 'react';
import cl from "../styles/ModalAuth.module.css"
import AuthInput from "./UI/authInput/AuthInput";
import FourHandRick from "../images/4HandRick.png";
import GreenRick from "../images/GreenRick.png";
import ModalMorty from "../images/ModalMorty.png";
import CustomButtonBlack from "./UI/customButtonBlack/CustomButtonBlack";
const ModalAuth = ({children, visible, setVisible}) => {

    const classes = [cl.modalAuth];
    if (visible) {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(" ")}>
            <img className={cl.modalGreenRick} src={GreenRick} alt=""/>
            <img className={cl.modal4HandRick} src={FourHandRick} alt=""/>
            <img className={cl.modalMorty} src={ModalMorty} alt=""/>
            <form className={cl.modalMain}>
                <h3 className={cl.modalTitle}>Вход</h3>
                <AuthInput type="text"/>
                <AuthInput type="text">

                </AuthInput>
                <div className={cl.modalCheckbox}>
                    <input type="checkbox"/>
                    <p>Запомнить</p>
                </div>
                <div className={cl.modalButton} >
                    <CustomButtonBlack>Войти</CustomButtonBlack>
                </div>
            </form>
        </div>
    );
};

export default ModalAuth;