import searchIcon from './search.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com/?apikey=26fe060b';
// Capped API with free plan hence not hidden

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(title);
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    	searchMovies("Avatar");
  }, []);

  

  return (
    <div className="app">
        <h1>Movieland</h1>

        <div className="search">
          <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(input) => {
            setSearchTerm(input.target.value);
            searchMovies(input.target.value);
          }}
          />
          <img
            src={searchIcon}
            alt="search"
            onChange={() => {}}
          />
        </div>

        {
          (movies?.length > 0)
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
