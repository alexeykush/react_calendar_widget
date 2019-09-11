import React, { Component, createRef } from 'react';

import "./index.scss";
import {CalendarContext} from "../context";
import Header from "../Header";
import Body from "../Body";
import WeekDays from "../WeekDays";

class Calendar extends Component {
    currentDate = new Date();
    constructor() {
        super();
        this.state = {
            selected: this.currentDate,
            yearToShow: this.currentDate.getFullYear(),
            monthToShow: this.currentDate.getMonth(),
            setSelected: this.setSelected,
            setYear: this.setYear,
            setMonth: this.setMonth,
            setMonthAndYear: this.setMonthAndYear
        };
    }

    setSelected = newDate => {
        this.setState({
            selected: newDate,
            yearToShow: newDate.getFullYear(),
            monthToShow: newDate.getMonth()
        });
    };

    setYear = year => {
        this.setState({
            yearToShow: year
        })
    };

    setMonth = month => {
        this.setState({
            monthToShow: month
        })
    };

    setMonthAndYear = (month, year) => {
        this.setState({
            monthToShow: month,
            yearToShow: year
        })
    };

    render() {
        return (
            <div className="calendar">
                <CalendarContext.Provider value={this.state}>
                    <Header />
                    <WeekDays/>
                    <Body />
                </CalendarContext.Provider>
            </div>
        );
    }
}

export default Calendar;