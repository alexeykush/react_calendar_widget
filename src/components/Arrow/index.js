import React from 'react';

const directions = {
    up: "fas fa-arrow-up",
    down: "fas fa-arrow-down"
};

const Arrow = ({ direction, onClick }) => {
    return (
        <div className="calendar-header-arrows__item" onClick={onClick}>
            <i className={directions[direction]} />
        </div>
    );
};

export default Arrow;