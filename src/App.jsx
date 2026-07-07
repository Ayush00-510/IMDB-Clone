import  React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import MoviesList from './Component/MoviesList'
import MoviesDetails from './Pages/MoviesDetails'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MoviesDetails />}></Route>
          <Route path='movies/:type' element={<MoviesList />}></Route>
          <Route path='/*' element={<h1>ERROR</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
