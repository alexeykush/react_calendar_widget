import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <div className="calendar-header-date__item" onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;