import styled from "styled-components";
import { useItemDetailContext } from "../context/itemdetail_context";

const BottomSheetDesc = ({ detail }) => {
  const { loadText, civCode } = useItemDetailContext();
  const paramExpresion = /(\%\d%)/gi;

  let descCompleted = loadText(`${detail.id}_${civCode}_itemDescription`);

  const placeholders = descCompleted.match(paramExpresion);
  if (placeholders && detail.bonus) {
    const bonuses = detail.bonus.split(", ");

    if (placeholders.length > bonuses.length) {
      placeholders.map((placeholder) => {
        descCompleted = descCompleted.replace(placeholder, bonuses[0]);
      });
    } else {
      placeholders.map((placeholder, index) => {
        descCompleted = descCompleted.replace(placeholder, bonuses[index]);
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
    <BottomSheetDescContainer>
      <div className="image"></div>
      <div className="description">
        {descCompleted.split("\r\n").map((desc, i) => (
          <p key={`itemDesc-${i}`}>{desc}</p>
        ))}
      </div>
    </BottomSheetDescContainer>
  );
};

const BottomSheetDescContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3 rem;
  color: white;

  .image {
    display: none;
    width: 80px;
    height: 80px;
    background-color: rgb(0, 0, 0, 0);
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  .description > p {
    margin: 0.1rem;
    text-align: left;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default BottomSheetDesc;
