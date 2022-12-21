import React from 'react';
import "./CustomSelect.scss"
import {ReactComponent as GreenMark} from "../../../icons/Ellipse Green.svg";
import {ReactComponent as RedMark} from "../../../icons/Ellipse Red.svg";
import {ReactComponent as YellowMark} from "../../../icons/Ellipse Yellow.svg";
import {ReactComponent as Vector} from "../../../icons/Vector.svg";
import {ReactComponent as SelectVector} from "../../../icons/Vector 2.svg";
const CustomSelect = () => {

    return (
        <div className="select-wrapper">
            <select className="customSelect" name="select-status">
                <option value="1">Живой</option>
                <option value="2">Мертв</option>
                <option value="3">Неизвестно</option>
            </select>
            <SelectVector className="select-icon"/>
        </div>
    );
};

export default CustomSelect;