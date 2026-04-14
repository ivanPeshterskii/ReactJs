function MovieCard({title, year, image}) {
    return (
        <div className="movie_card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{year}</p>
        </div>
    );
}

export default MovieCard;