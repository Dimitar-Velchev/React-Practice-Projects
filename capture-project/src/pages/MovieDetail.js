import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../movieState";

//Animation framer-motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <StyleHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyleHeadline>
          <StlyleAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StlyleAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

//Award component

const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyleAward>
  );
};

//Styling

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyleHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StlyleAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyleAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
