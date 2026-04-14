import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'Ghost Nation',
        'Find the girl',
    ]);

    const updateMovieClickHandler = () => {
        setMovies(oldMovie => {
            const newMovie = [...oldMovie]; 

            const removed = newMovie.shift();

            return newMovie;
        });
    }

    return (
        <section>
            <h2>Movies</h2>
            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={updateMovieClickHandler}>Update</button>
        </section>
    );
}