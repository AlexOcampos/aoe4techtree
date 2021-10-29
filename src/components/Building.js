import styled from "styled-components";
import { Item } from "../components";

const Building = ({ building, age, columnsWidth }) => {
  const showBuilding = building.availableAge === age;
  const numItems = building.items.length;
  let width = 0;

  // Calculate width
  width = columnsWidth[building.id] * 100; // 100px / item (max items in an age)
  width = width < 200 ? 200 : width;

  // Calculate margins building

  return (
    <BuildingContainer
      className="align-center-x2"
      building="Town Center"
      style={{ maxWidth: `${width}px`, width: `${width}px`, minWidth: "200px" }}
    >
      {showBuilding ? (
        <Item
          image={`../building.png`}
          itemId={building.id}
          name={building.name}
          type={"building"}
          placeholder={"x3"}
          widthBuilding={width}
        />
      ) : (
        ""
      )}

      {building.items.map((item) => {
        return (
          <Item
            key={item.id}
            image={`../${item.type}.png`}
            itemId={item.id}
            name={item.name}
            type={item.type}
            size={showBuilding && numItems > 3 ? "small" : "normal"}
          />
        );
      })}
    </BuildingContainer>
  );
};

const BuildingContainer = styled.article`
  display: flex;

  align-items: center;
  flex-wrap: wrap;

  border-bottom: 1px solid #ffffff40;
  border-right: 1px solid #92a7ff1f;
  box-sizing: border-box;
`;

export default Building;
