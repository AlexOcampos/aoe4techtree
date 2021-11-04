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

const BottomSheetTitleContainer = styled.div``;

export default BottomSheetTitle;
