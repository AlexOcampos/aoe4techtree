import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <TitleContainer>
      <Link to="/">
        <div className="title-line"></div>
        <h1>AoE4 Tech Tree</h1>
        <div className="title-line"></div>
      </Link>
    </TitleContainer>
  );
};

const TitleContainer = styled.nav`
  width: 100vw;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url("../title-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;

  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    font-size: 2.2rem;
  }

  .title-line {
    height: 16px;
    background: rgb(96, 75, 46);
    background: linear-gradient(
      90deg,
      rgba(96, 75, 46, 1) 0%,
      rgba(208, 159, 30, 1) 50%,
      rgba(96, 75, 46, 1) 100%
    );
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.7rem;
    }

    .title-line {
      height: 12px;
    }

    height: 6rem;
  }

  @media (max-width: 880px) {
    h1 {
      font-size: 1.2rem;
    }

    height: 3.7rem;

    .title-line {
      height: 10px;
    }
  }

  @media (max-width: 600px) {
    height: 25%;
    h1 {
      font-size: 0.7rem;
    }

    height: 2.7rem;

    .title-line {
      height: 8px;
    }
  }
`;

export default Title;