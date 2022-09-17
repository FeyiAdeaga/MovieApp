import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList.jsx'

export default function App() {
  const [movies, setMovies] = useState([
    {
      Title: 'Star wars',
      Year: 1982,
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster: 'https://media.timeout.com/images/105863223/750/422/image.jpg'
    },
    {
      Title: 'Family guy',
      Year: 1982,
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yy8SIC79eedmWFf6JgZv30u_GAAodDNPZg&usqp=CAU'
    }
  ])
  return (
    <div className='container-fluid'>
      <MovieList movies={movies} />
    </div>
  )
}
