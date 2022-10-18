import React from 'react';
import "./favoriteButton.scss"
const FavoriteButton = () => {
    return (

            <button className="favorite__button">
                Добавить в избранное
                <svg className="favorite__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/*<circle cx="20" cy="20" r="20" fill="#008BDA"/>*/}
                    <circle cx="20" cy="20" r="19.5" stroke="#A2A2A2" stroke-opacity="0.6"/>
                </svg>
            </button>

    );
};

export default FavoriteButton;