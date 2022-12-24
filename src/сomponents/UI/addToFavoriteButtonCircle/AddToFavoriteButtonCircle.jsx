import React from 'react';
import {ReactComponent as AddToFavCircle} from "../../../icons/AddToFavoriteCircle.svg";
import {ReactComponent as HorizontalLine} from "../../../icons/HorizontalLine.svg";
import {ReactComponent as VerticalLine} from "../../../icons/VerticalLine.svg";
import "./AddToFavoriteButtonCircle.scss";

const AddToFavoriteButtonCircle = () => {
    return (
        <div className="fav">
            <button className="fav__button">
                <AddToFavCircle className="fav__circle"/>
                <VerticalLine className="fav__vertical"/>
                <HorizontalLine className="fav__horizontal"/>
            </button>
        </div>
    );
};

export default AddToFavoriteButtonCircle;