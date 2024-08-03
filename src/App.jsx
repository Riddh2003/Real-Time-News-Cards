import './App.css'
import MoviesCard from './MoviesCard.jsx'
import NewsCards from './NewsCards.jsx'

function App() {
  return (
    <>
        <NewsCards/>
        <hr className='border-2'/>
        <MoviesCard/>
    </>
  )
}

export default App
