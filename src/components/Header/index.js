import React, { useContext } from 'react';

import {CalendarContext} from "../context";
import Arrow from "../Arrow";
import Button from "../Button";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Header = () => {
    const { monthToShow, yearToShow, setMonth, setMonthAndYear} = useContext(CalendarContext);
    const onPrevClick = () => {
        if(monthToShow === 0) {
            setMonthAndYear(11, yearToShow - 1);
        } else {
            setMonth(monthToShow - 1);
        }
    };

    const onNextClick = () => {
        if(monthToShow === 11) {
            setMonthAndYear(0, yearToShow + 1);
        } else {
            setMonth(monthToShow + 1);
        }
    };

    return (
        <header className="calendar-header">
            <Arrow
                direction="left"
                onClick={onPrevClick}
            />
            <Button
                text={months[monthToShow]}
            />
            <Button
                text={yearToShow}
            />
            <Arrow
                direction="right"
                onClick={onNextClick}
            />
        </header>
    );
};

export default Header;