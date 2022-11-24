import React, {useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import ModalRegistration from "../сomponents/UI/ModalRegistration";
import CustomSelect from "../сomponents/UI/CustomSelect/CustomSelect";
import FavoriteButton from "../сomponents/UI/favoriteButton/favoriteButton";
import LocationItem from "../сomponents/UI/locationItem/LocationItem";

const Locations = () => {

    const [locations, setLocations] = useState([]);

    fetch("https://rickandmortyapi.com/api/location")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLocations(data.results)
        })


    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">
                Локации
            </h3>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {locations.map(location =>
                <LocationItem location={location} key={location.id}/>
            )}
            </div>
        </div>
    );
};

export default Locations;