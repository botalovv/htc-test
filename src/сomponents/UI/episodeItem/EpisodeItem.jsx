import React, {useState} from 'react';
import "./EpisodeItem.scss";

const EpisodeItem = ({episode}) => {

    const [episodeCharacters, setEpisodeCharacters] = useState([]);

    // let characters = [];
    //
    // {(episode.characters).map(character => fetch(character)
    //     .then((res)=> {
    //          characters.push(res.name)}))
    //     }

    function characterFetch () {

    }
    episode.characters.map(character => fetch(episode.characters)
        .then((res) => {
            setEpisodeCharacters(res.name)
        }))


    return (
        <div className="episode">
            <div className="episode__container">
                <h6 className="episode__title">{episode.name}</h6>
                <div className="episode__left">
                    <p className="episode__variable">
                       Эпизод:
                    </p>
                    <p className="episode__answer">
                        {episode.episode}
                    </p>
                    <p className="episode__variable">
                        Дата выхода:
                    </p>
                    <p className="episode__answer">
                        {episode.air_date}
                    </p>
                </div>
                <div className="episode__right">
                    <p className="episode__variable">
                        Персонажи, учавствующие в эпизоде:
                    </p>
                    <p className="episode__answer">
                        Rick Sanchez,
                        Morty Smith, Bepisian, Beth Smith, Canklanker Thom, Davin, Frank Palicky, Glenn, Hookah Alien, Jerry Smith, Jessica, Jessica's Friend, Mr. Goldenfold, Mrs. Sanchez, Principal Vagina, Summer Smith и др.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EpisodeItem;