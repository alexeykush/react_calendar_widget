import React, { useContext } from 'react';

import {CalendarContext} from "../context";
import Arrow from "../Arrow";
import Button from "../Button";
import {swapTop, swapBottom} from "../../resources/js/animation";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Header = () => {
    const { monthToShow, yearToShow, setMonth, setMonthAndYear } = useContext(CalendarContext);
    const onPrevClick = () => {
        if(monthToShow === 0) {
            setMonthAndYear(11, yearToShow - 1);
        } else {
            setMonth(monthToShow - 1);
        }
        swapTop();
    };

    const onNextClick = () => {
        if(monthToShow === 11) {
            setMonthAndYear(0, yearToShow + 1);
        } else {
            setMonth(monthToShow + 1);
        }
        swapBottom();
    };

    return (
        <header className="calendar-header">
            <div className="calendar-header-date">
                <Button
                    text={months[monthToShow]}
                />
                <Button
                    text={yearToShow}
                />
            </div>
            <div className="calendar-header-arrows">
                <Arrow
                    direction="up"
                    onClick={onPrevClick}
                />
                <Arrow
                    direction="down"
                    onClick={onNextClick}
                />
            </div>
        </header>
    );
};

export default Header;