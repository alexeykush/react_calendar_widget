import React, { useContext } from 'react';

import {CalendarContext} from "../context";
import {getNextMonth, getPreviousMonth, isSameDay, isSameMonth} from "../../utils";
import {swapTop, swapBottom} from "../../resources/js/animation";

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

    const onClick = () => {
        const currentShowing = new Date(yearToShow, monthToShow);
        const previousMonth = getPreviousMonth(currentShowing);
        const nextMonth = getNextMonth(currentShowing);
        if(isSameMonth(day, previousMonth)) {
            swapTop();
        } else if (isSameMonth(day, nextMonth)) {
            swapBottom();
        }
        setSelected(day);
    };


    return (
        <div
            className={getClassName()}
            onClick={onClick}
        >
            {day.getDate()}
        </div>
    );
};

export default Day;