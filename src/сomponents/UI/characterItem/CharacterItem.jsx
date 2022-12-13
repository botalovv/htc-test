import React from 'react';
import "./CharacterItem.scss";

const CharacterItem = (props) => {

    let isList = false;
    let listClass = "item "
    listClass += isList === false ? "" : "item-list"

    return (

           <div className={listClass}>
               <div>
                 <img className="item__image item-list__image" src={props.character.image}/>
               </div>
               <div className="item__inline">
                   <h6 className="item__name item-list__name">
                       {props.character.name}
                   </h6>
               </div>
               <div className="item__race">
                   <p className="item__race_sample">
                       Раса:
                   </p>
                   <p className="item__race_value">
                       {props.character.species}
                   </p>
               </div>
               <div className="item__origin">
                   <p className="item__origin_sample">
                       Место происхождения:
                   </p>
                   <p className="item__origin_value">
                       {props.character.origin.name}
                   </p>
               </div>
               <div className="item__location">
                   <p className="item__location_sample">
                       Последняя локация:
                   </p>
                   <p className="item__location_value">
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