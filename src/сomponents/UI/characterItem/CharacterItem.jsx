import React from 'react';
import "./CharacterItem.scss";

const CharacterItem = (props) => {


    return (

           <div className="item item-list">
               <img className="item__image item-list__image" src={props.character.image}/>
               <span className="item__inline">
                   <h6 className="item__name item-list__name">
                       {props.character.name}
                   </h6>
               </span>
                <div className="item__variable">
                    <p className="item__info item-list__info">
                        Раса:
                    </p>
                    <p className="item__info item-list__info">
                        Место происхождения:
                    </p>
                    <p className="item__info item-list__info">
                        Последняя локация:
                    </p>
                </div>
                   <div className="item__fetched">
                       <p className="item__race">
                           {props.character.species}
                       </p>
                       <p className="item__origin">
                           {props.character.origin.name}
                       </p>
                       <p className="item__location">
                           {props.character.location.name}
                       </p>
                   </div>
           </div>

    );
};

export default CharacterItem;

/// {name}
///{species}
/// {origin}