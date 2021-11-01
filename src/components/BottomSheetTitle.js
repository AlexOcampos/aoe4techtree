import styled from "styled-components";

const BottomSheetTitle = ({ title, description, image }) => {
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
          {description.split("\\r\\n").map((desc, i) => (
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
