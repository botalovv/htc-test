import React from 'react';
import "./LocationItem.scss"

const LocationItem = ({location}) => {

    return (
        <div className="location">
            <div className="location__container">
                <h6 className="location__title">{location.name}</h6>
                <div className="location__left">
                    <p className="location__variable">Тип:</p>
                    <p className="location__type">{location.type}</p>
                    <p className="location__variable">Измерение:</p>
                    <p className="location__type">{location.dimension}</p>
                </div>
                <div className="location__right">
                    <p className="location__variable">Количество персонажей, которые в последний раз были замечены здесь:</p>
                    <p className="location__count">{location.residents.length}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationItem;