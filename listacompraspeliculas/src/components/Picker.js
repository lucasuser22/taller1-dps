import React from 'react';
import movies from '../data/movies';

function Picker({ onAdd }) {
  const [selectedMovie, setSelectedMovie] = React.useState('');

  const handleAdd = () => {
    if (selectedMovie) {
      const movie = movies.find(movie => movie.nombre === selectedMovie);
      onAdd(movie);
      setSelectedMovie('');
    }
  };

  return (
    <div>
      <select value={selectedMovie} onChange={e => setSelectedMovie(e.target.value)}>
        <option value="">Agregar elemento</option>
        {movies.map((movie, index) => (
          <option key={index} value={movie.nombre}>{movie.nombre}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

export default Picker;
