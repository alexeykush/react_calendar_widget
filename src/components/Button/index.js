import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <div className="calendar-header__item" onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;