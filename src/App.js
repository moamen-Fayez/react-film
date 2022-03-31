import { React } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './movie';
import searchIcon from './search.svg'

//e66a4414
const API_KEY = "https://www.omdbapi.com?apikey=e66a4414";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchPart, setSearchPart] = useState('')

  const searchMovie = async (title) => {
  const response = await fetch(`${API_KEY}&s=${title}`)
  const data = await response.json()
  setMovies(data.Search)
  //console.log(data.Search)
}
useEffect(() => { searchMovie('spiderman')  },[])
  return (
    <div className="app">
      <h1>FilmLand</h1>
      <div className='search'>
        <input placeholder='Search for Movies'value={searchPart}
        onChange={(e) => { setSearchPart(e.target.value) }}
        />
        
        <button className='btn' onClick={() => { searchMovie(searchPart) }}>Search</button>
        </div>  
        {movies.length > 0 ? (<div className='container'>
          {movies.map((mov) =>(<Movie mov={mov}/>))}
        </div>):(<div className='empty'> <h3>No Movies found!</h3></div>)}
        
    </div>
  );
}

export default App;
