import React from 'react';
import "./CharacterItem.scss";
const CharacterItem = () => {
    return (
        <div>
           <div className="item">
            <img className="item__image"/>
            <h6 className="item__name">
                Rick Sanchez
            </h6>
            <p className="item__info">
                Раса:
            </p>
            <p className="item__info">
                Место происхождения:
            </p>
            <p className="item__info">
                Последняя локация:
            </p>
           </div>
        </div>
    );
};

export default CharacterItem;