import React, {useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import CharacterItem from "../сomponents/UI/characterItem/CharacterItem";
import "../styles/Characters.scss"



const Characters = () => {

    const [items, setItems] = useState([
        // {id: 1, name: "Rick Sanchez", race: "Human"}
    ])

    fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data.results)
            setItems(data.results)

        })

    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">Персонажи</h3>
            {items.map(item =>
                <CharacterItem item={item}/>
            )}
        </div>
    );
};

export default Characters;