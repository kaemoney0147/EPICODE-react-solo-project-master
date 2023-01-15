import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import NetflixNavbar from "./components/NetflixNavbar"
import MovieDetails from "./components/MovieDetails"

import Footer from "./components/Footer"
import MainSection from "./components/MainSection"
import TVShows from "./components/TVShows"

function App() {
  return (
    <BrowserRouter>
      <div className="App darkBackground">
        <NetflixNavbar />
        <Container>
          <Routes>
            <Route element={<MainSection />} path="/" />
            <Route element={<TVShows />} path="/tvshows" />
            <Route element={<MovieDetails />} path="/movies/:movieId" />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
