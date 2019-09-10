import React from 'react';
import Day from "../Day";

const Week = ({ data }) => {
    return (
        <div className="calendar-days">
            {data.map((day, index) => <Day day={day} key={index}/>)}
        </div>
    );
};

export default Week;