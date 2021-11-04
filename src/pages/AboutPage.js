import React from "react";
import { Title } from "../components";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="content">
        <article>
          <h2>About the project:</h2>
          <p>
            A project by{" "}
            <a
              href="https://twitter.com/rudyairlines"
              target="_blank"
              rel="noreferrer"
            >
              rudyairlines
            </a>
            .{" "}
          </p>
          <p>Do you want to contribute? Contact me.</p>
          <div className="support">
            <p>
              If you like what I do, encourage me to keep creating nerd stuffs.
            </p>
            <p>You can buy me a coffee☕️!</p>
            <a
              href="https://www.buymeacoffee.com/rudyairlines"
              target="_blank"
              rel="noreferrer"
            >
              <img className="support-logo" src="./bmc-logo.png" alt="" />
            </a>
          </div>
        </article>
        <article>
          <h2>Contributors:</h2>
          <p>
            Special thanks to{" "}
            <a
              href="https://www.twitch.tv/pinch3terneira"
              target="_blank"
              rel="noreferrer"
            >
              Pinch3Terneira
            </a>{" "}
            for his colaboration in the project.
          </p>
          <p>
            Also thanks to MugenNoSora who make{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1LG0We2pTFZsbFm_k1SKLix8gxSq_9n5R_Ic3G2tVzBg"
              target="_blank"
              rel="noreferrer"
            >
              this great document
            </a>{" "}
            which inspired me and help me to make this website.
          </p>
        </article>
        <article>
          <p>
            Age of Empires IV © Microsoft Corporation. aoe4techtree is not
            endorsed by or affiliated with Microsoft.
          </p>
        </article>
      </div>
      <Title />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p a {
    color: #bbcad7;
  }
  .content {
    overflow: auto;
    width: 100vw;
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  article {
    margin: 1.2rem;
  }

  .support-logo {
    height: 48px;
  }
`;
export default AboutPage;
