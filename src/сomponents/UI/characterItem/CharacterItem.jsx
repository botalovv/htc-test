import React from 'react';
import "./CharacterItem.scss";
import {ReactComponent as GreenMark} from "../../../icons/Ellipse Green.svg";
import {ReactComponent as RedMark} from "../../../icons/Ellipse Red.svg";
import {ReactComponent as YellowMark} from "../../../icons/Ellipse Yellow.svg";
import {ReactComponent as AddToFavoriteCircle} from "../../../icons/AddToFavoriteCircle.svg";
import AddToFavoriteButtonCircle from "../addToFavoriteButtonCircle/AddToFavoriteButtonCircle";

const CharacterItem = (props) => {

    let isList = false;
    let listClass = "item "
    listClass += isList === false ? "" : "item-list"

    return (

           <div className={listClass}>
               <AddToFavoriteButtonCircle className="item__button"/>
               <div>
                 <img className="item__image item-list__image" src={props.character.image} alt=""/>
               </div>
               <div className="item__top">
                   <h6 className="item__top_name item-list__name">
                       {props.character.name}
                   </h6>
                   <GreenMark className="item__status_mark" />
                   <p className="item__status_value">
                       {props.character.status}
                   </p>
                   {/*<div className="item__status">*/}
                   {/*    <GreenMark className="item__status_mark" />*/}
                   {/*    <p className="item__status_value">*/}
                   {/*        {props.character.status}*/}
                   {/*    </p>*/}
                   {/*</div>*/}

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