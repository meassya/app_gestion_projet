// MenuButton.js
import React from 'react';

const MenuButton = ({ label, onClick }) => {
    return (
        <button className="menu-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default MenuButton;
