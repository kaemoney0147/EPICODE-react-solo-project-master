import { useEffect, useState } from "react";
import { Row, Col, Image, Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieDisplay = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = process.env.REACT_APP_BE_URL;

  const getMovies = async () => {
    try {
      let response = await fetch(`${url}/medias?title=${props.title}`);
      if (response.ok) {
        let r = await response.json();
        console.log("---------------logging the Search object---------------");
        console.log("r", r);
        // console.log(r.Search)
        let movieList = r;
        console.log(movieList, "movieList");
        // this.setState({ movies: movieList, isLoading: false })
        setMovies(movieList);
        setIsLoading(false);
        console.log("list of movies", movies);
      } else {
        console.log("something went wrong");
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.series]);

  const movieChunks = (inputArray, perChunk) => {
    let result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    return result;
  };

  return (
    <div className="movie-gallery m-2">
      {isLoading && (
        <Spinner animation="grow" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <Carousel indicators={false}>
        <h5 className="text-light mt-2 mb-2 text-left">{props.title}</h5>

        {movieChunks(movies, 7).map((moviesRow, index) => (
          <Carousel.Item key={`carousel-${index}`}>
            {isLoading && (
              <Spinner animation="grow" variant="primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            <div className="active d-flex inline">
              <div className="movie-row">
                <Row>
                  {moviesRow.map((movie) => (
                    <Col key={movie.imdbID}>
                      <Link to={"/movies/" + movie.imdbID}>
                        <Image className="movie-cover" src={movie.Poster} />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieDisplay;
