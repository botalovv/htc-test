import React from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import ModalRegistration from "../сomponents/UI/ModalRegistration";
import CustomSelect from "../сomponents/UI/CustomSelect/CustomSelect";
import FavoriteButton from "../сomponents/UI/favoriteButton/favoriteButton";

const Locations = () => {

    return (
        <div>
            <Navbar/>
            <BackButton/>
            <CustomSelect/>
            <FavoriteButton/>
        </div>
    );
};

export default Locations;