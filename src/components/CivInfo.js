import styled from "styled-components";

const CivInfo = ({ civTree }) => {
  return (
    <CivInfoContainer className="civ-info">
      <div
        className="bg"
        style={{
          backgroundImage: `url("../${civTree.image}")`,
          opacity: civTree.civId === 2 ? 0.8 : 0.4,
        }}
      ></div>
      <header>
        {civTree.civId ? (
          <h1 style={{ marginBottom: 0, marginTop: 0 }}>{civTree.civName}</h1>
        ) : (
          <h1>{civTree.civName}</h1>
        )}
        <h2>{civTree.shortDesc}</h2>
        <p>{civTree.longDesc}</p>
      </header>

      <div className="civ-explanation">
        {civTree.infoAndBonus.map((info, infoIndex) => {
          return (
            <article key={`info-${infoIndex}`}>
              <h3>{info.title}</h3>
              {info.description ? <p>{info.description}</p> : ""}
              {info.list ? (
                <ul>
                  {info.list.map((li, index) => (
                    <li key={`info-${infoIndex}-${index}`}>{li}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </article>
          );
        })}
      </div>
    </CivInfoContainer>
  );
};

const CivInfoContainer = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  height: 100vh;
  padding: 0.6rem;
  width: 30rem;
  border: 3px solid #5d5127;
  box-sizing: border-box;
  background: rgb(38, 50, 67);
  background: linear-gradient(
    90deg,
    rgba(38, 50, 67, 1) 0%,
    rgba(37, 48, 66, 0.2) 100%
  );

  position: relative;
  z-index: 1;

  .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;

    background-position: center top;
  }

  header {
    margin-bottom: 6rem;
  }

  .civ-explanation {
    article {
      margin-bottom: 3rem;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: normal;
    background: linear-gradient(
      0deg,
      rgba(153, 154, 126, 1) 0%,
      rgba(209, 175, 101, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }
`;

export default CivInfo;
