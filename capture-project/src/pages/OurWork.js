import styled from "styled-components";
import { Link } from "react-router-dom";

//Animation framer-motion
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation,lineAnimation } from "../animation";

const OurWork = () => {
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyleHide>
            <motion.img
              variants={photoAnimation}
              src="/images/athlete-small.png"
              alt="Athlete"
            />
          </StyleHide>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src="/images/theracer-small.png" alt="Athlete" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src="/images/goodtimes-small.png" alt="Athlete" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;
`;

export default OurWork;
