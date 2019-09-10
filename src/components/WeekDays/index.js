import React from 'react';

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeekDays = () => {
    return (
        <div className="calendar-weekdays">
            {
                weekDays.map(day => (
                    <div className="calendar-weekdays__item" key={day}>{day}</div>
                ))
            }
        </div>
    );
};

export default WeekDays;