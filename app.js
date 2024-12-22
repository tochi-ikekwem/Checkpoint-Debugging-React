// src/components/App.js  
import React, { useState } from 'react';  
import MovieList from './MovieList';  
import AddMovie from './AddMovie';  

const App = () => {  
  const [movies, setMovies] = useState([]);  

  const addMovie = (movie) => {  
    setMovies([...movies, movie]);  
  };  

  return (  
    <div>  
      <h1>Movie App</h1>  
      <AddMovie addMovie={addMovie} />  
      <MovieList movies={movies} />  
    </div>  
  );  
};  

export default App;