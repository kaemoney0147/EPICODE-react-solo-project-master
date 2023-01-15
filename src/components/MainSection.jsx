import MovieDisplay from "./MovieDisplay.jsx"
import GenreDetails from "./GenreDetails.jsx"

const MainSection = () => {
  return (
    <div id="mainSection" className="container-fluid">
      <GenreDetails header="Movies" />
      <MovieDisplay title="Harry Potter" />
      <MovieDisplay title="X-Men" />
      <MovieDisplay title="Rocky" />
    </div>
  )
}

export default MainSection
