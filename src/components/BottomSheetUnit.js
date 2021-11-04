import styled from "styled-components";
import { BottomSheetDesc } from "../components";

const BottomSheetUnit = ({ detail }) => {
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
    <BottomSheetUnitContainer>
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
        <div className="column">
          <h2>Stats</h2>
          <p>
            <b>HP:</b> {detail.hp}
          </p>
          <p>
            <b>Speed:</b> {detail.speed}
          </p>
          {detail.attack ? (
            <p>
              <b>Attack:</b> {detail.attack}
            </p>
          ) : (
            ""
          )}
          {detail.attackSpeed ? (
            <p>
              <b>Attack speed:</b> {detail.attackSpeed}
            </p>
          ) : (
            ""
          )}
          {detail.dps ? (
            <p>
              <b>DPS:</b> {detail.dps}
            </p>
          ) : (
            ""
          )}
          {detail.damageType && detail.damageType !== "None" ? (
            <p>
              <b>Damage Type:</b> {detail.damageType}
            </p>
          ) : (
            ""
          )}
          {detail.areaOfEffect ? (
            <p>
              <b>Area Attack:</b> {detail.areaOfEffect}
            </p>
          ) : (
            ""
          )}
          <p>
            <b>Armor:</b> {detail.meleeArmor} / {detail.rangedArmor}
          </p>
          {detail.bonusDamage ? (
            <p>
              <b>Bonus Damage:</b> {detail.bonusDamage}{" "}
              {detail.bonusDamageAgainst}{" "}
            </p>
          ) : (
            ""
          )}

          <p>
            <b>Line of sight:</b> {detail.lineOfSight}
          </p>
        </div>
      </article>
    </BottomSheetUnitContainer>
  );
};

const BottomSheetUnitContainer = styled.div`
  color: black;
  overflow: auto;
  margin: 2rem;

  article {
    display: flex;
  }

  .column {
    width: 33%;
  }
`;

export default BottomSheetUnit;
