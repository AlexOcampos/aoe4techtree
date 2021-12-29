import styled from "styled-components";
import { useItemDetailContext } from "../context/itemdetail_context";

const BottomSheetTitle = ({ detail }) => {
  const { loadText } = useItemDetailContext();
  const l18nName = loadText(`${detail.id}_name`);
  const title = l18nName ? l18nName : detail.customName;
  console.log(detail);
  return (
    <BottomSheetTitleContainer>
      <h1 className="popup-black" style={{ textTransform: "capitalize" }}>
        {title}
      </h1>
      <span className="debug-info">{detail.id}</span>
    </BottomSheetTitleContainer>
  );
};

const BottomSheetTitleContainer = styled.div`
  color: white;
  .debug-info {
    font-family: monospace;
    display: none;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.7rem;
      margin: 0;
    }
  }
`;

export default BottomSheetTitle;
