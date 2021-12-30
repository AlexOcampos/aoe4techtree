import styled from "styled-components";
import { BottomSheetDesc } from "../components";
import { useItemDetailContext } from "../context/itemdetail_context";

const BottomSheetUnit = ({ detail }) => {
  const { loadText } = useItemDetailContext();
  let ageFrom = loadText(`age-${detail.ageId}`);

  return (
    <BottomSheetUnitContainer>
      <BottomSheetDesc detail={detail} />
      <p style={{ display: "none" }}>Tech</p>
      <article>
        <div className="column">
          <h2>{loadText("cost_detail_title")}</h2>
          {detail.food && detail.food > 0 ? (
            <p>
              {loadText("food_resource_name")}: {detail.food}
            </p>
          ) : (
            ""
          )}
          {detail.wood && detail.wood > 0 ? (
            <p>
              {loadText("wood_resource_name")}: {detail.wood}
            </p>
          ) : (
            ""
          )}
          {detail.gold && detail.gold > 0 ? (
            <p>
              {loadText("gold_resource_name")}: {detail.gold}
            </p>
          ) : (
            ""
          )}
          {detail.stone && detail.stone > 0 ? (
            <p>
              {loadText("stone_resource_name")}: {detail.stone}
            </p>
          ) : (
            ""
          )}
          {detail.time ? (
            <p>
              {loadText("time_resource_name")}: {detail.time}{" "}
              {loadText("seconds_resource_name")}
            </p>
          ) : (
            ""
          )}
          {detail.costByAge
            ? JSON.parse(detail.costByAge).map((age, index) => (
                <p key={`costbyage-${index}`}>
                  {loadText("age_name")}: {age.age} -{" "}
                  {age.cost.food && age.cost.food > 0
                    ? `${loadText("food_resource_name")}: ${age.cost.food}  `
                    : ""}
                  {age.cost.wood && age.cost.wood > 0
                    ? `${loadText("wood_resource_name")}: ${age.cost.wood}  `
                    : ""}
                  {age.cost.gold && age.cost.gold > 0
                    ? `${loadText("gold_resource_name")}: ${age.cost.gold}  `
                    : ""}
                  {age.cost.stone && age.cost.stone > 0
                    ? `${loadText("stone_resource_name")}: ${age.cost.stone}  `
                    : ""}
                </p>
              ))
            : ""}
        </div>
        <div className="column">
          <h2>{loadText("basic-info_detail_title")}</h2>
          <p>{loadText(detail.genre)}</p>
          <p>
            {loadText(detail.class)} - {loadText(detail.type)}
          </p>
          <p>
            <b>{loadText("age_name")}:</b> {ageFrom}
          </p>
        </div>
        <div className="column">
          <h2>{loadText("stats_detail_title")}</h2>
          {detail.hp ? (
            <p>
              <b>{loadText("hp_stats_name")}:</b> {detail.hp}
            </p>
          ) : (
            ""
          )}
          {detail.speed ? (
            <p>
              <b>{loadText("speed_stats_name")}:</b> {detail.speed}
            </p>
          ) : (
            ""
          )}
          {detail.attack ? (
            <p>
              <b>{loadText("attack_stats_name")}:</b> {detail.attack}
            </p>
          ) : (
            ""
          )}
          {detail.attackSpeed ? (
            <p>
              <b>{loadText("attack_speed_stats_name")}:</b> {detail.attackSpeed}
            </p>
          ) : (
            ""
          )}
          {detail.dps ? (
            <p>
              <b>{loadText("dps_stats_name")}:</b> {detail.dps}
            </p>
          ) : (
            ""
          )}
          {detail.damageType && detail.damageType !== "None" ? (
            <p>
              <b>{loadText("damage_type_stats_name")}:</b> {detail.damageType}
            </p>
          ) : (
            ""
          )}
          {detail.areaOfEffect ? (
            <p>
              <b>{loadText("area_attack_stats_name")}:</b> {detail.areaOfEffect}
            </p>
          ) : (
            ""
          )}
          {detail.meleeArmor && detail.rangedArmor ? (
            <p>
              <b>{loadText("armor_stats_name")}:</b> {detail.meleeArmor} /{" "}
              {detail.rangedArmor}
            </p>
          ) : (
            ""
          )}
          {detail.bonusDamage ? (
            <p>
              <b>{loadText("bonus_damage_stats_name")}:</b> {detail.bonusDamage}{" "}
              {detail.bonusDamageAgainst}{" "}
            </p>
          ) : (
            ""
          )}

          {detail.lineOfSight ? (
            <p>
              <b>{loadText("line_of_sight_stats_name")}:</b>{" "}
              {detail.lineOfSight}
            </p>
          ) : (
            ""
          )}
        </div>
      </article>
    </BottomSheetUnitContainer>
  );
};

const BottomSheetUnitContainer = styled.div`
  color: white;
  overflow: auto;
  margin: 2rem;

  article {
    display: flex;
  }

  .column {
    width: 33%;
  }

  @media (max-width: 600px) {
    article {
      flex-direction: column;
      .column {
        width: 100%;
      }
    }
  }
`;

export default BottomSheetUnit;
