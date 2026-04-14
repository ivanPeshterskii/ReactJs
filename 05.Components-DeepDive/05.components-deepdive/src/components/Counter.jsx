import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(c => c + 1);
    }

    const decrementClickHandler = () => {
        setCount(c => c - 1);
    }

    return (
        <section>
            <h2>Counter</h2>

            <div>Count: {count}</div>

            <button onClick={incrementClickHandler}>+</button>
            <button onClick={decrementClickHandler}>-</button>
        </section>
    );
}