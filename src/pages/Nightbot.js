import React from "react";
import styled from "styled-components";
import { Title } from "../components";
import { urlStatic } from "../utils/constants";

const NightbotPage = () => {
  return (
    <Wrapper className="">
      <Title margin={"0rem"} />
      <section>
        <h1>Nightbot</h1>
        <p>
          If you want to add a nightbot to your channel, add the following code
          to your nightbot command (do not forget to change your username
          instead of "rudyairlines"!!)
        </p>
        <div className="code-block">
          {
            "$(eval if(`$(querystring)`!=``){    $(urlfetch https://nightbotaoe4.herokuapp.com/api/nightbot/rank?search=$(querystring))} else {    $(urlfetch https://nightbotaoe4.herokuapp.com/api/nightbot/rank?search=rudyairlines)})"
          }
        </div>
        <img
          className="configuration-image"
          src={`${urlStatic}/nightbot/configuration.png`}
          alt=""
        />
        <p>Now you have your command ready:</p>
        <img
          className="configuration-image"
          src={`${urlStatic}/nightbot/example.png`}
          alt=""
        />
        <p>Enjoy!</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  section {
    margin-top: 1rem;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p a {
    color: #bbcad7;
  }
  .code-block {
    border: solid 1px #ffffff;
    padding: 0.5rem;
    max-width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
  }
  .configuration-image {
    margin: 0.7rem;
    max-width: 80vw;
  }
`;

export default NightbotPage;
