import { Image, Col } from "react-bootstrap"
function SingleMovieCard(props) {
  return (
    <Col key={props.movie.imdbID}>
      <Image className="movie-cover" src={props.movie.Poster} />
    </Col>
  )
}

export default SingleMovieCard
