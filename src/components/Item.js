import styled from "styled-components";
import { useItemDetailContext } from "../context/itemdetail_context";

const Item = ({ image, name, type, widthBuilding, itemId }) => {
  const { openItemDetail } = useItemDetailContext();

  let bgColor = `var(--clr-item-${type})`;
  let marginLat = 0.5;
  let width = 80;
  let height = 80;

  if (type === "building") {
    marginLat = (widthBuilding - (width + 2)) / 2;
  } else {
    marginLat = 4;
  }

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
      <img src={image} alt={name} className={"img-small"} />
      <span>{name}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  margin: 0.1rem;
  margin-bottom: 0.1rem;
  border: 1px solid #ffffff5c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;

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
    margin: 0.05rem;

    img {
      width: 50px;
      height: 50px;
    }

    .img-small {
      width: 30px;
      height: 30px;
    }

    span {
      line-height: 34%;
    }
  }
`;

export default Item;
