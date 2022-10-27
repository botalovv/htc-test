import React from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import CharacterItem from "../сomponents/UI/characterItem/CharacterItem";
import "../styles/Characters.scss"

const Characters = () => {

    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">Персонажи</h3>
            <CharacterItem/>
        </div>
    );
};

export default Characters;