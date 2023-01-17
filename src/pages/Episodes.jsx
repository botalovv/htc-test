import React, {useEffect, useState} from 'react';
import Navbar from "../сomponents/Navbar";
import BackButton from "../сomponents/UI/backButton/BackButton";
import EpisodeItem from "../сomponents/UI/episodeItem/EpisodeItem";
import AuthInput from "../сomponents/UI/authInput/AuthInput";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
       fetchEpisodes()
    }, []);

    const fetchEpisodes = () => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEpisodes(data.results)
            })
    }

    return (
        <div>
            <Navbar/>
            <BackButton/>
            <h3 className="page__title">
                Эпизоды
            </h3>
            {episodes.map(episode =>
                <EpisodeItem episode={episode} key={episode.id}/>
            )}
        </div>
    );
};

export default Episodes;