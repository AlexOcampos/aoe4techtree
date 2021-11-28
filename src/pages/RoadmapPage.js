import React from "react";
import styled from "styled-components";
import { Title } from "../components";
import { Link } from "react-router-dom";
const RoadmapPage = () => {
  return (
    <Wrapper>
      <Title margin={"0rem"} />
      <div className="roadmap-container">
        <section>
          <h1>Releases</h1>
          <h3>1.1.0 - 28/Nov/2021</h3>
          <ul>
            <li>
              <b>New building icons with more quality and technology icons</b>
              <p>
                Finally I could extract the images from the game, so after a
                hardwork I search for all building and tech icons. In a few days
                I'll release the units icons too.
              </p>
            </li>
            <li>
              <b>Nightbot page</b>
              <p>
                Some streamers complain about the lack of nightbot for AoE4.
                There are some options but I create{" "}
                <Link to={"/nightbot"} className="ext-link">
                  my own
                </Link>
                . My friend
                <a
                  className="ext-link"
                  target="_blank"
                  href="https://www.twitch.tv/pinch3terneira"
                  rel="noreferrer"
                >
                  Pinch3Terneira
                </a>{" "}
                for example is using it. I hope it's usefull for someone else.
              </p>
            </li>
            <li>
              <b>Releases page</b>
              <p>
                I think it's really important to keep you informed of the new
                features and the next steps.
              </p>
            </li>
            <li>
              <b>Translation support</b>
              <p>
                Some of you contact me to help in the project. So with your
                effort the website will be translated to other languages. I
                prepare the web to be translated. If you want to contribute{" "}
                <a
                  target="_blank"
                  href="https://twitter.com/rudyairlines"
                  rel="noreferrer"
                  className="ext-link"
                >
                  contact me
                </a>
                .
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h1>Next steps</h1>
          <ul>
            <li>
              <b>Unit icons</b>
              <p>I working on get from the file games the unit icons.</p>
            </li>
            <li>
              <b>Redesign tech tree</b>
              <p>
                Some of you hate the current horizontal scroll, other love it.
                So I'm working on a new design and my idea is to keep both.
                Everybody happy!
              </p>
            </li>
            <li>
              <b>Counters guide for each unit and more stats</b>
              <p>
                My idea is give you the info as simple as possible. I don't know
                if will capable, but I'll try.
              </p>
            </li>
            <li>
              <b>Translations to other languages</b>
            </li>
          </ul>
          <p>
            I love to read your feedback. Please keep{" "}
            <a
              target="_blank"
              href="https://forms.gle/i95wXgNzinJZQKUD6"
              rel="noreferrer"
              className="ext-link"
            >
              {" "}
              send me your ideas
            </a>
            . I'll do my best to make it real.
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 0.1rem;

  .roadmap-container {
    margin-top: 1rem;
    width: 100vw;
    display: flex;
  }

  section {
    width: 50%;
    padding: 2rem;
  }

  b {
    color: #ffe4c4;
  }

  .ext-link {
    color: #00ffff;
    margin-right: 0.2rem;
    margin-left: 0.3rem;
  }

  @media (max-width: 600px) {
    .roadmap-container {
      flex-direction: column;
    }
  }
`;

export default RoadmapPage;
