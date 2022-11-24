import React, {useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import CharacterItem from "../сomponents/UI/characterItem/CharacterItem";
import "../styles/Characters.scss"



const Characters = () => {

    const [characters, setCharacters] = useState([
        // {id: 1, name: "Rick Sanchez", race: "Human"}
    ])

    fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data.results)
            setCharacters(data.results)

        })

    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">Персонажи</h3>
            <div className="item__container" style={{width:"1170px"}}>
            {characters.map(character =>
                <CharacterItem character={character} key={character.id}/>
            )}
            </div>
        </div>
    );
};

export default Characters;