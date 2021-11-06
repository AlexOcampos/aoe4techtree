import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LeaderboardPage = () => {
  return (
    <Wrapper className="">
      <section>
        <h1>Leaderboard</h1>
        <h3>So you are interested on this right? 😎</h3>
        <h3>No problem, I'll work on that, so try again in a few days.</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default LeaderboardPage;
