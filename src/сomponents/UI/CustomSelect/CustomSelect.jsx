import React from 'react';
import "./CustomSelect.scss"
import {ReactComponent as GreenMark} from "../../../icons/Ellipse Green.svg";
import {ReactComponent as RedMark} from "../../../icons/Ellipse Red.svg";
import {ReactComponent as YellowMark} from "../../../icons/Ellipse Yellow.svg";
import {ReactComponent as Vector} from "../../../icons/Vector.svg";
import {ReactComponent as SelectVector} from "../../../icons/Vector 2.svg";
const CustomSelect = ({options, value, onChange}) => {

    return (
        <div className="select-wrapper">
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
                className="customSelect"
                name="select-status">
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
            <SelectVector className="select-icon"/>
        </div>
    );
};

export default CustomSelect;