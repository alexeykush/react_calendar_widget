const FIRST_DAY_OF_WEEK = 1;
const LAST_DAY_OF_WEEK = 0;
const FAULT_IN_DAY = 1;
const LAST_DAY_INDEX = 6;

export const compose = (...fns) => value => fns.reduce((acc, curr) => curr(acc), value);

export const today = () => new Date();

export const isSameDate = (date1, date2) => date1.getDate() === date2.getDate();
export const isSameMonth = (date1, date2) => date1.getMonth() === date2.getMonth();
export const isSameYear = (date1, date2) => date1.getFullYear() === date2.getFullYear();
export const isSameDay = (date1, date2) => isSameDate(date1, date2) && isSameMonth(date1, date2) && isSameYear(date1, date2);

export const addMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
};

export const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};

export const addOneDay = date => addDays(date, 1);

export const getPreviousMonth = date => {
    const newDate = new Date(date);
    return new Date(newDate.setMonth(newDate.getMonth() - 1));
};

export const getNextMonth = date => {
    const newDate = new Date(date);
    return new Date(newDate.setMonth(newDate.getMonth() + 1));
};


export const getFirstDayOfMonth = date => new Date(date.getFullYear(), date.getMonth(), 1);
export const getLastDayOfMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const getFirstDayOfWeek = date => {
    const newDate = new Date(date);
    const currentDay = newDate.getDay();
    const currentDate = newDate.getDate();
    if(currentDay === FIRST_DAY_OF_WEEK) return newDate;
    if(currentDay === LAST_DAY_OF_WEEK) {
        newDate.setDate(currentDate - LAST_DAY_INDEX)
    } else {
        newDate.setDate(currentDate - (currentDay - FAULT_IN_DAY))
    }
    return newDate;
};

export const getLastDayOfWeek = date => {
    const newDate = new Date(date);
    const currentDay = newDate.getDay();
    const currentDate = newDate.getDate();
    if(currentDay === LAST_DAY_OF_WEEK) return newDate;
    if(currentDay === LAST_DAY_INDEX) {
        newDate.setDate(currentDate + FAULT_IN_DAY)
    } else {
        newDate.setDate(currentDate + ( LAST_DAY_INDEX - (currentDay - FAULT_IN_DAY) ))
    }
    return newDate;
};

export const getFirstDayOfNextWeek = date => compose(getLastDayOfWeek, addOneDay)(date);


export const getFullWeekPeriod = date => ({
    startWeek: getFirstDayOfWeek(date),
    endWeek: getLastDayOfWeek(date)
});

export const getFullMonthPeriod = date => ({
    startMonth: getFirstDayOfMonth(date),
    lastMonth: getLastDayOfMonth(date)
});

export const getWeekDays = date => {
    const dates = [];
    let currentDate = getFirstDayOfWeek(date);
    const lastDayOfWeek = compose(getLastDayOfWeek, addOneDay)(currentDate);
    let columnCounter = 0;
    while (!isSameDay(currentDate, lastDayOfWeek)){
        dates[columnCounter++] = new Date(currentDate);
        currentDate = addOneDay(currentDate);
    }
    return dates;
};

export const getMonthDays = date => {
    const firstDay = compose(getFirstDayOfMonth, getFirstDayOfWeek)(date);
    const lastDay = compose(getLastDayOfMonth, getLastDayOfWeek, addOneDay)(date);
    const dates = [];
    let currentDate = new Date(firstDay);
    while (!isSameDay(currentDate, lastDay)) {
        const weekDays = getWeekDays(currentDate);
        dates.push(weekDays);
        currentDate = getFirstDayOfNextWeek(currentDate);
    }
    return dates;
};