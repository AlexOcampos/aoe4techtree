import styled from "styled-components";

const BottomSheetTitle = ({ title }) => {
  return (
    <BottomSheetTitleContainer>
      <h1
        className="popup-black"
        style={{ color: "black", textTransform: "capitalize" }}
      >
        {title}
      </h1>
    </BottomSheetTitleContainer>
  );
};

const BottomSheetTitleContainer = styled.div`
  @media (max-width: 600px) {
    h1 {
      font-size: 1.7rem;
      margin: 0;
    }
  }
`;

export default BottomSheetTitle;
