import React from 'react';
import "./CustomSelect.scss"
const CustomSelect = ({children}) => {
    return (
        <div className="select-wrapper">
            <select className="customSelect" name="select-status">
                {children}
                <option value="1">Живой</option>
                <option value="2">Мертв</option>
                <option value="3">Неизвестно</option>
            </select>
        </div>
    );
};

export default CustomSelect;