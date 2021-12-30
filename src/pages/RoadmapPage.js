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
          <h3>1.1.4 - 29/Dic/2021</h3>
          <ul>
            <li>
              <b>Advanced stats color palette</b>
              <p>
                Some have complained about the advanced stats section which is
                too shiny (some even threatened to report me for destroying his
                corneas 🤣). Your wishes are orders to me.
              </p>
              <p>
                I have modify the color palette. I hope it improves the user
                experience of the website. If you still don't like it, please
                use the "feedback" button. I read all your comments.
              </p>
            </li>
            <li>
              <b>Chinese translations</b>
              <p>
                Thanks to 冬会一雪 we have the web translated to chinese. Kudos
                for him!!
              </p>
              <p>
                If you like to help us and translate the web to your language,
                you could contact me{" "}
                <a
                  href="https://discordapp.com/users/rudyairlines#6990"
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link"
                >
                  by discord
                </a>{" "}
                or
                <a
                  href="https://twitter.com/rudyairlines"
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link"
                >
                  by twitter
                </a>
                .
              </p>
            </li>
            <li>
              <b>Fix error with some units and technologies</b>
              <p>
                There are some mistakes wich I've corrected:
                <ul>
                  <li>
                    Cannon unit and Cannon emplacement has wrong stats and
                    descriptions
                  </li>
                  <li>Boyar's fortitude tech had no data</li>
                  <li>
                    Rus' "Precision Cross Breeding" technology (it was shown as
                    a unit previously)
                  </li>
                  <li>
                    Springald unit and Springald emplacement tech has wrong
                    stats and descriptions
                  </li>
                  <li>
                    "Angled Surfaces" name (previously "Wedge Rivets") on
                    english translations
                  </li>
                  <li>
                    Chinese pyrotechnics moved from siege workshop to university
                  </li>
                  <li>
                    Move some Abbasid technologies: Phalanx to Barracks, Camel
                    Handling and Camel Barding to Blacksmith, Composite Bows to
                    Archery Range
                  </li>
                </ul>
              </p>
            </li>
          </ul>
          <h3>1.1.3 - 22/Dic/2021</h3>
          <ul>
            <li>
              <b>Unit icons</b>
              <p>
                Finally, thanks to{" "}
                <a
                  href="https://discordapp.com/users/ipieren#5351"
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link"
                >
                  Mayank Apte
                </a>{" "}
                we have the unit icons (and all the icons!) on the web.
              </p>
            </li>
          </ul>
          <h3>1.1.2 - 17/Dic/2021</h3>
          <ul>
            <li>
              <b>BuyMeACoffe widget</b>
              <p>
                I added a widget to receive support. As you know the website has
                several expenses (server, domain, ...). Due to the success of
                the page last month I receive an unexpected bill from the server
                provider (we exceed the bandwidth rate). I made the 1.1.1
                version to avoid this in the future, but I have to pay the bill
                anyway this month. I hope with your help to keep the project
                alive.
              </p>
              <p>Also, everyone is kinder at Christmas :D</p>
              <p>
                I have not worked on this project to earn money, but if you
                think the time I have invested worth it, buy me a coffee to keep
                me awake working!
              </p>
            </li>
          </ul>
          <h3>1.1.1 - 06/Dic/2021</h3>
          <ul>
            <li>
              <b>Move images to a static server</b>
              <p>
                The webpage is hosted on a Netlify free account. I didn't expect
                this success (thanks for your support!) so I put all the
                resources in the same server. Netlify free account has a
                bandwidth limit of 100GB/month and I'm going over the limit, so
                I move all the images to a{" "}
                <a
                  target="_blank"
                  href="https://github.com/AlexOcampos/aoe4treetechstatic"
                  rel="noreferrer"
                  className="ext-link"
                >
                  githubpages project
                </a>
                .
              </p>
            </li>
          </ul>
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
            <li>
              <b>Other minor fixes and visual improvements</b>
            </li>
          </ul>
        </section>
        <section>
          <h1>Next steps</h1>
          <ul>
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
