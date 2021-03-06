import React, {useContext} from 'react';

import {CalendarContext} from "../context";
import {getMonthDays} from "../../utils";
import Week from "../Week";

const Body = () => {
    const {monthToShow, yearToShow} = useContext(CalendarContext);

    const monthDays = getMonthDays(new Date(yearToShow, monthToShow));
    return (
        <div className="calendar-body-wrapper">
            <div className="calendar-body" id="calendar-body">
                {monthDays.map((week, index) => <Week data={week} key={index}/>)}
            </div>
        </div>
    );
};

export default Body;