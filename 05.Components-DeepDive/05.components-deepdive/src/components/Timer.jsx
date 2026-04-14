import { useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    // let seconds = 0;

    setTimeout(() => {
        setSeconds(seconds + 1)
        // seconds++;
    }, 1000);

    return (
        <div>
            <h2>Timer</h2>
            <p>{seconds} seconds</p>
        </div>
    )
}