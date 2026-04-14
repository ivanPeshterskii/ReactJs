import { useState, useEffect, use } from 'react';

export default function Typer() {

    const[key, setKey] = useState('Press a key!');

    useEffect(() => {
        window.addEventListener('keypress', (event) => {
            setKey(event.key);
        })
    }, []);


   

    return (
        <section>
            <h2>Typer</h2>

            <p>Pressed Key</p>
            <strong>{key}</strong>
        </section>
    )
}