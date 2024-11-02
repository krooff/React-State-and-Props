// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    // Step 1: Initialize state with a hardcoded list of movies
    const [movies, setMovies] = useState([
        { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', genre: 'Action', isVisible: false },
        { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', genre: 'Drama', isVisible: false },
        { title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', genre: 'Action', isVisible: false },
        { title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.', genre: 'Drama', isVisible: false },
    ]);

    // State for toggling view
    const [showAction, setShowAction] = useState(false);

    // Step 2: Function to toggle movie details
    const toggleDetails = (index) => {
        const updatedMovies = movies.map((movie, i) =>
            i === index ? { ...movie, isVisible: !movie.isVisible } : movie
        );
        setMovies(updatedMovies);
    };

    // Step 3: Function to remove a movie
    const removeMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    // Step 4: Function to toggle view
    const toggleView = () => {
        setShowAction(!showAction);
    };

    return (
        <div>
            <button onClick={toggleView}>
                {showAction ? 'Show All Movies' : 'Show Action Movies Only'}
            </button>
            <ul>
                {movies
                    .filter(movie => !showAction || movie.genre === 'Action')
                    .map((movie, index) => (
                        <li key={index}>
                            <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                {movie.title}
                            </span>
                            <button onClick={() => removeMovie(index)}>Remove</button>
                            {movie.isVisible && <p>{movie.description}</p>}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
