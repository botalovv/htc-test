import React, {useEffect, useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import FavoriteButton from "../сomponents/UI/favoriteButton/favoriteButton";
import LocationItem from "../сomponents/UI/locationItem/LocationItem";
import AuthInput from "../сomponents/UI/authInput/AuthInput";
import {ReactComponent as PrevPage} from "../icons/PrevPage.svg";
import {ReactComponent as NextPage} from "../icons/NextPage.svg";

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [fullObject, setFullObject] = useState("");
    const [searchLocations, setSearchLocations] = useState("");
    const [searchByType, setSearchByType] = useState("");
    const [searchByDimension, setSearchByDimension] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchLocations()
    }, [page,searchLocations, searchByDimension, searchByType])

    const fetchLocations = () => {
        fetch(`https://rickandmortyapi.com/api/location?page=${page}&name=${searchLocations}&type=${searchByType}&dimension=${searchByDimension}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLocations(data.results)
                setFullObject(data.info)
            })
    }

    const prevPage = () => {
        if (fullObject.prev != null) {
            setPage(page - 1);
        }
    }

    const nextPage = () => {
        setPage(page + 1);
    }


    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">
                Локации
            </h3>
            <div className="page__filtration">
                <div className="page__filtration_name">
                    <p className="page__filtration_p">
                        Поиск по названию
                    </p>
                    <AuthInput
                        value={searchLocations}
                        onChange={e => setSearchLocations(e.target.value)}
                        id="firstInput"
                        type="text"
                        placeholder="Введите название локации"/>
                </div>
                <div className="page__filtration_name">
                    <p className="page__filtration_p">
                        Поиск по типу
                    </p>
                    <AuthInput
                        value={searchByType}
                        onChange={e => setSearchByType(e.target.value)}
                        id="firstInput"
                        type="text"
                        placeholder="Введите тип локации"/>
                </div>
                <div className="page__filtration_name">
                    <p className="page__filtration_p">
                        Поиск по измерению
                    </p>
                    <AuthInput
                        value={searchByDimension}
                        onChange={e => setSearchByDimension(e.target.value)}
                        placeholder="Введите измерение"
                        id="firstInput"
                        type="text"
                    />
                </div>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {locations.map(location =>
                <LocationItem location={location} key={location.id}/>
            )}
            </div>
            <div className="pagination">
                <button onClick={prevPage} className="pagination__button">
                    <PrevPage className="pagination__svg pagination__svg_prev"/>
                    <p className="pagination__p pagination__p_prev">Предыдущая</p>
                </button>

                <button onClick={nextPage} className="pagination__button">
                    <p className="pagination__p pagination__p_next">Следующая</p>
                    <NextPage className="pagination__svg pagination__svg_next"/>
                </button>
            </div>
        </div>
    );
};

export default Locations;