import React from 'react';

const directions = {
    left: "<",
    right: ">"
};

const Arrow = ({ direction, onClick }) => {
    return (
        <div className="calendar-header__item arrow" onClick={onClick}>
            {directions[direction]}
        </div>
    );
};

export default Arrow;