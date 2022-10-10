import React from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../UI/BackButton";
import CharacterItem from "../UI/CharacterItem";

const Characters = () => {
    return (
        <div>
            <Navbar/>
            <BackButton/>
            <CharacterItem/>
        </div>
    );
};

export default Characters;