import styled from "styled-components";

const BottomSheetTitle = ({ title, description, image, bonus }) => {
  const paramExpresion = /(\%\d%)/gi;

  let descCompleted = description;

  const placeholders = description.match(paramExpresion);
  if (placeholders && bonus) {
    const bonuses = bonus.split(", ");

    if (placeholders.length > bonuses.length) {
      placeholders.map((placeholder, index) => {
        console.log(
          `replacing ${placeholder} (i:${index}) - bonus: ${bonuses}`
        );
        descCompleted = descCompleted.replace(placeholder, bonuses[0]);
        console.log(`New desc: ${descCompleted}`);
      });
    } else {
      placeholders.map((placeholder, index) => {
        console.log(
          `replacing ${placeholder} (i:${index}) - bonus: ${bonuses}`
        );
        descCompleted = descCompleted.replace(placeholder, bonuses[index]);
        console.log(`New desc: ${descCompleted}`);
      });
    }
  }

  descCompleted = descCompleted
    .replaceAll("%%", "%")
    .replaceAll("%%", "%")
    .replaceAll("%%", "%");

  descCompleted = descCompleted
    .replaceAll("--", "-")
    .replaceAll("--", "-")
    .replaceAll("--", "-");

  descCompleted = descCompleted
    .replaceAll("++", "+")
    .replaceAll("++", "+")
    .replaceAll("++", "+");

  descCompleted = descCompleted
    .replaceAll("-+", "-")
    .replaceAll("-+", "-")
    .replaceAll("-+", "-");

  return (
    <BottomSheetTitleContainer>
      <h1
        className="popup-black"
        style={{ color: "black", textTransform: "capitalize" }}
      >
        {title}
      </h1>
      <div className="desc-container">
        <div className="image"></div>
        <div className="description">
          {descCompleted.split("\\r\\n").map((desc, i) => (
            <p key={`itemDesc-${i}`}>{desc}</p>
          ))}
        </div>
      </div>
    </BottomSheetTitleContainer>
  );
};

const BottomSheetTitleContainer = styled.div`
  .desc-container {
    display: flex;
    justify-content: flex-start;
    margin: 3 rem;
  }

  .image {
    width: 80px;
    height: 80px;
    background-color: var(--clr-primary-1);
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .description {
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  .description > p {
    margin: 0.1rem;
    text-align: left;
  }
`;

export default BottomSheetTitle;
