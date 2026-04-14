import { useState } from "react";

// const days = [
//     'Monday', 
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
// ];

export default function Calendar() {
    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay(s => s + 1);
    };

    const resetDayClickHandler = () => {
        setDay(0);
    };

    let currentDay;

    switch (day) {
        case 0:
            currentDay = 'Monday';
            break;

        case 1:
            currentDay = 'Tuesday';
            break;

        case 2:
            currentDay = 'Wednesday';
            break;

        case 3:
            currentDay = 'Thursday';
            break;

        case 4:
            currentDay = 'Friday';
            break;

        case 5:
            currentDay = 'Saturday';
            break;

        case 6:
            currentDay = 'Sunday';
            break;

    }

    if (day > 6) {
        return (
            <section>
                <h2>Calendar</h2>
                <h4>Invalid day</h4>

                <button onClick={resetDayClickHandler}>Reset Me!</button>
            </section>
        );
    }

    const isWorkDay = day < 5;

    return (
        <section>
            <h2>Calendar</h2>

            <h3>{isWorkDay ? 'Weekday' : 'Weekend'}</h3>
            <div>
                <h3>Current Day {currentDay}</h3>
                {isWorkDay && (
                    <div>
                        <h3>Work Schedule</h3>
                        <ul>
                            <li>first</li>
                            <li>second</li>
                            <li>third</li>
                        </ul>
                    </div>
                )}
            </div>
            <button onClick={nextDayClickHandler}>Next day</button>
        </section>
    );
}