import React, { useContext } from 'react';

import {CalendarContext} from "../context";
import {isSameDay, isSameMonth} from "../../utils";

const Day = ({ day }) => {
    const { setSelected, selected, monthToShow, yearToShow } = useContext(CalendarContext);

    const getClassName = () => {
        let className = "calendar-days__item";
        if(isSameDay(selected, day)) {
            className += " active";
        } else if(!isSameMonth(new Date(yearToShow, monthToShow), day)) {
            className += " disabled";
        }
        return className;
    };

    return (
        <div
            className={getClassName()}
            onClick={() => setSelected(day)}
        >
            {day.getDate()}
        </div>
    );
};

export default Day;