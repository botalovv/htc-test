import React, {useEffect, useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import CharacterItem from "../сomponents/UI/characterItem/CharacterItem";
import "../styles/Characters.scss"
import AuthInput from "../сomponents/UI/authInput/AuthInput";
import CustomSelect from "../сomponents/UI/CustomSelect/CustomSelect";
import {ReactComponent as CharacterList} from "../icons/CharacterList.svg";
import {ReactComponent as CharacterWrap} from "../icons/CharacterWrap.svg";


const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [selectedSort, setSelectedSort] = useState("");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCharacters(data.results)

            })
    }, [])

    const sortCharacters = (sort) => {
        setSelectedSort(sort);
        if(sort === "Alive") {
            fetch("https://rickandmortyapi.com/api/character?status=alive")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCharacters(data.results)
                });
        }
        if(sort === "unknown") {
            fetch("https://rickandmortyapi.com/api/character?status=unknown")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCharacters(data.results)
                });
        }
        if(sort === "Dead") {
            fetch("https://rickandmortyapi.com/api/character?status=dead")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCharacters(data.results)
                });
        }
    }

    return (
        <div className="page">
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">Персонажи</h3>
            <div className="page__filtration">
                <div className="page__filtration_name">
                    <p className="page__filtration_p">
                        Поиск по имени
                    </p>
                    <AuthInput id="firstInput" type="text" placeholder="Введите имя персонажа"/>
                </div>
                <div className="page__filtration_race">
                    <p className="page__filtration_p">
                        Поиск по расе
                    </p>
                    <AuthInput id="secondInput" type="text" placeholder="Введите расу персонажа"/>
                </div>
                <div className="page__filtration_status">
                    <p className="page__filtration_p">
                        Поиск по статусу
                    </p>
                    <CustomSelect
                        value={selectedSort}
                        onChange={sortCharacters}
                        options={[
                            {value: "Alive", name: "Живой"},
                            {value: "Dead", name: "Мертв"},
                            {value: "unknown", name: "Неизвестно"}
                        ]}
                    />
                </div>
                <div className="page__button">
                    <p className="page__button_p">
                        Вид:
                    </p>
                    <button className="page__button_list">
                        <CharacterList/>
                    </button>
                    <button className="page__button_wrap">
                        <CharacterWrap/>
                    </button>
                </div>

            </div>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {characters.map(character =>
                <CharacterItem character={character} key={character.id}/>
            )}
            </div>
        </div>
    );
};

export default Characters;