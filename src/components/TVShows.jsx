import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
import GenreDetails from "./GenreDetails.jsx"
import MovieDisplay from "./MovieDisplay.jsx"

export default function TVShows() {
  return (
    <>
      <GenreDetails header="TV Shows" />
      <MovieDisplay series="Spider-man" />
      <MovieDisplay series="Batman" />
      <MovieDisplay series="Superman" />
    </>
  )
}
