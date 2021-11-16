import styled from "styled-components";
import { useItemDetailContext } from "../context/itemdetail_context";

const Item = ({ image, altImage, name, type, widthBuilding, itemId }) => {
  const { openItemDetail, loadText } = useItemDetailContext();

  let bgColor = `var(--clr-item-${type})`;
  let marginLat = 0.5;
  let width = 80;
  let height = 80;

  if (type === "building") {
    marginLat = (widthBuilding - (width + 2)) / 2;
  } else {
    marginLat = 4;
  }

  let l18nName = loadText(`${itemId}_name`);
  if (!l18nName) {
    console.log(`Name: ${l18nName} of ${itemId} (fallback: ${name})`);
  }

  l18nName = l18nName ? l18nName : name;

  return (
    <ItemContainer
      style={{
        backgroundColor: bgColor,
        marginLeft: `${marginLat}px`,
        marginRight: `${marginLat}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={() => openItemDetail(itemId)}
    >
      <img
        src={image}
        alt={l18nName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = altImage;
        }}
        className={"img-small"}
      />

      <span>{l18nName}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  margin: 0.1rem;
  margin-bottom: 0.1rem;
  border: 1px solid #ffffff5c;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }

  span {
    text-transform: capitalize;
  }

  .img-small {
    width: 40px;
    height: 40px;
  }

  .span-small {
  }

  @media (max-width: 600px) {
    width: 120px;
    height: 80px;
    margin: 0.01rem;

    img {
      width: 50px;
      height: 50px;
    }

    .img-small {
      width: 30px;
      height: 30px;
    }

    span {
      line-height: 100%;
    }
  }
`;

export default Item;
