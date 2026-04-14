import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div className='movies-container'>
      <MovieCard
        title="Inception"
        year="2010"
        image="https://example.com/inception.jpg"
        />
      <MovieCard
        title="Interstellar"
        year="2014"
        image="https://example.com/interstellar.jpg"
        />
    </div>
  );
}

export default App
