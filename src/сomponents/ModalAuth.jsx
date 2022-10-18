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
        <div className={classes.join(" ")} onClick={() => setVisible(false)}>
            <img className={cl.modalGreenRick} src={GreenRick} alt=""/>
            <img className={cl.modal4HandRick} src={FourHandRick} alt=""/>
            <img className={cl.modalMorty} src={ModalMorty} alt=""/>
            <form className={cl.modalMain}>
                <h3 className={cl.modalTitle}>Вход</h3>
                <AuthInput type="text" placeholder="Введите логин или E-mail"/>
                <AuthInput type="button" placeholder="Введите пароль"/>
                <div className={cl.modalPassword}>
                    <button className={cl.modalIcon}>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.604 0.562012L16.258 3.69901C14.988 3.27101 13.572 3.00001 12.015 3.00001C4.446 3.00001 0 9.55101 0 9.55101C0 9.55101 1.928 12.502 5.146 14.689L2.235 17.598L3.649 19.012L21.019 1.97701L19.604 0.562012ZM13.588 6.34101C10.3 4.88801 6.907 8.24901 8.323 11.547L6.597 13.254C4.783 12.094 3.372 10.604 2.537 9.59401C4.03 7.94601 7.354 5.00001 12.015 5.00001C12.942 5.00001 13.811 5.11901 14.625 5.31501L13.588 6.34101ZM10.705 13.772L15.795 8.77901C16.812 11.89 13.792 14.846 10.705 13.772ZM24 9.55101C24 9.55101 19.748 17 12.015 17C10.636 17 9.353 16.709 8.164 16.263L9.778 14.68C10.493 14.873 11.236 15 12.015 15C16.806 15 20.119 11.473 21.519 9.63601C20.79 8.81401 19.563 7.64601 17.932 6.68401L19.421 5.22401C22.403 7.12401 24 9.55101 24 9.55101Z" fill="#A2A2A2" fill-opacity="0.6"/>
                        </svg>
                    </button>
                </div>
                <div className={cl.modalCheckbox}>
                    <label>
                    <input type="checkbox"/>
                    <span></span>
                    Запомнить
                    </label>
                </div>
                <div className={cl.modalButton} >
                    <CustomButtonBlack>Войти</CustomButtonBlack>
                </div>
            </form>
        </div>
    );
};

export default ModalAuth;