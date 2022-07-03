import searchIcon from './search.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
// OMDB API key: 26fe060b
const API_URL = 'http://www.omdbapi.com/?apikey=26fe060b';

function App() {

  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    	searchMovies('Avatar');
  }, []);

  

  return (
    <div className="app">
        <h1>Movieland</h1>

        <div className="search">
          <input 
          palceholder="Search for movies"
          value="Avatar"
          onChange={() => {}}
          />
          <img
            src={searchIcon}
            alt="search"
            onChange={() => {}}
          />
        </div>

        {
          movies?.length > 0 
          ? (
          <div className="container">
            {movies.map((movie)=> (<MovieCard movie={movie}/>))}
        </div>
          ) : (
            <div className="empty">
            <h2>No Movies Found</h2>
          </div>
          )
        }
        

    </div>
  );
}

export default App;
