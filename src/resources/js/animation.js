const swapOptions = {
    duration: 350,
    easing: "ease-in-out"
};

export const swapTop = () => {
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.animate([
        {
            transform: `translateY(${calendarBody.clientHeight}px)`
        },
        {
            transform: "translateY(0)"
        }
    ], swapOptions)
};

export const swapBottom = () => {
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.animate([
        {
            transform: `translateY(-${calendarBody.clientHeight}px)`
        },
        {
            transform: "translateX(0)"
        }
    ], swapOptions)
};