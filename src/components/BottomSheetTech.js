import styled from "styled-components";

import { BottomSheetDesc } from "../components";

const BottomSheetBuilding = ({ detail }) => {
  let ageFrom;
  if (detail.ageId === "1") {
    ageFrom = "I (Dark Age)";
  } else if (detail.ageId === "2") {
    ageFrom = "II (Feudal Age)";
  } else if (detail.ageId === "3") {
    ageFrom = "III (Castle Age)";
  } else {
    ageFrom = "IV (Imperial Age)";
  }
  return (
    <BottomSheetBuildingContainer>
      <BottomSheetDesc detail={detail} />
      <article>
        <div className="column">
          <h2>Cost</h2>
          {detail.food && detail.food > 0 ? <p>Food: {detail.food}</p> : ""}
          {detail.wood && detail.wood > 0 ? <p>Wood: {detail.wood}</p> : ""}
          {detail.gold && detail.gold > 0 ? <p>Gold: {detail.gold}</p> : ""}
          {detail.stone && detail.stone > 0 ? <p>Stone: {detail.stone}</p> : ""}
          {detail.time ? <p>Time: {detail.time} sg</p> : ""}
        </div>
        <div className="column">
          <h2>Basic Info</h2>
          <p>{detail.genre}</p>
          <p>
            {detail.class} - {detail.type}
          </p>
          <p>
            <b>Age:</b> {ageFrom}
          </p>
        </div>
      </article>
    </BottomSheetBuildingContainer>
  );
};

const BottomSheetBuildingContainer = styled.div`
  color: black;
  overflow: auto;
  margin: 2rem;

  article {
    display: flex;
  }

  .column {
    width: 50%;
  }
`;

export default BottomSheetBuilding;
