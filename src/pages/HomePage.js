import React from "react";
import { Title } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { civilizations } from "../data/civs.json";
import { urlStatic } from "../utils/constants";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="notification">
        <span>
          <b>Last update:</b> 2021/12/29 (fix errors, chinese translations,
          color adv stats,...){" "}
          <Link to={"/roadmap"} className="link">
            <b>[see more details]</b>
          </Link>
        </span>
      </div>
      <div className="civs">
        {civilizations.map((civ) => {
          return (
            <article key={civ.id}>
              {civ.comingSoon ? (
                <div style={{ cursor: "auto" }}>
                  <div className="overlay" style={{ opacity: 1 }}>
                    <span className="civName">Coming soon</span>
                  </div>
                  <img src={`${urlStatic}${civ.imageSmall}`} alt={civ.name} />
                </div>
              ) : (
                <Link to={`/civilization/${civ.id}`}>
                  <div className="overlay">
                    <span className="civName">{civ.name}</span>
                  </div>

                  <img src={`${urlStatic}${civ.imageSmall}`} alt={civ.name} />
                </Link>
              )}
            </article>
          );
        })}
      </div>

      <Title />
      <div className="footer">
        <Link to="/nightbot" className="footer-item">
          <h3>Nightbot</h3>
        </Link>
        <Link to="/about" className="footer-item">
          <h3>About</h3>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-background);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .notification {
    position: fixed;
    width: 100vw;
    top: 0;
    background-color: #9c27b0;
    display: flex;
    justify-content: space-evenly;
    color: white;
  }

  .link {
    color: #efdf4e;
  }

  .link:hover {
    color: #1764a1;
  }

  .civs {
    overflow: auto;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    display: grid;
    align-items: center;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);

    article {
      margin: 1rem;
      width: 15rem;
      height: 8.5rem;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      justify-self: center;
    }
    article:hover .overlay {
      opacity: 1;
    }
    img {
      width: 15rem;
      height: 8.5rem;
    }
    .overlay {
      position: absolute;
      top: -3px;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: var(--clr-primary-2);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8.5rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  .footer {
    width: 100vw;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    h3:hover {
      color: var(--clr-primary-1);
    }

    .footer-item {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 1200px) {
    .civs {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 880px) {
    .civs {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    height: 100vh;

    .notification {
      max-height: 5rem;
      flex-direction: column;

      span {
        /*text-overflow: ellipsis;
        max-width: 100vw;
        white-space: nowrap;*/
        overflow: hidden;
        margin: 0.2rem;
      }
    }

    .civs {
      margin-top: 5.2rem;
      height: 80vh;
      grid-template-columns: repeat(1, 1fr);
    }

    .footer {
      height: 10vh;
    }
  }
`;

export default ErrorPage;
