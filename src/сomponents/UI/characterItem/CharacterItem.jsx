import React from 'react';
import "./CharacterItem.scss";

const CharacterItem = (props) => {


    return (
        <div>
           <div className="item item-list">
               <img className="item__image item-list__image" src={props.item.image}/>
               <div className="item__inline">
                   <h6 className="item__name item-list__name">
                       {props.item.name}
                   </h6>
               </div>
                <div className="item__variable">
                    <p className="item__info item-list__info">
                        Раса:{props.item.race}
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
                           {props.item.species}
                       </p>
                       <p className="item__origin">
                           {props.item.origin.name}
                       </p>
                       <p className="item__location">
                           {props.item.location.name}
                       </p>
                   </div>
           </div>
        </div>
    );
};

export default CharacterItem;

/// {name}
///{species}
/// {origin}