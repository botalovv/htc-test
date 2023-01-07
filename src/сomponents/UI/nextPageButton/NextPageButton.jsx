import React from 'react';
import {ReactComponent as NextPage} from "../../../icons/NextPage.svg";
import "./NextPageButton.scss"

const NextPageButton = ({onClick}) => {

    return (
        <button className="next__button">
            Следующая
            <NextPage/>
        </button>
    );
};

export default NextPageButton;