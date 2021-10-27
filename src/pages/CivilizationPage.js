import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CivInfo, CivTree } from "../components";
import { civilizations } from "../data/civs.json";
import { abbasid, chinese, hre, english } from "../data/civsInfo.json";

const CivilizationPage = () => {
  const { id } = useParams();

  const civilization = civilizations.filter((civ) => civ.id === parseInt(id));
  if (!civilization) {
    return <p>Civ not found</p>;
  }
  const { civInfo } = civilization[0];

  let civTree;
  if (civInfo === "english") {
    civTree = english;
  } else if (civInfo === "chinese") {
    civTree = chinese;
  } else if (civInfo === "hre") {
    civTree = hre;
  } else if (civInfo === "abbasid") {
    civTree = abbasid;
  }

  if (!civTree) {
    return <h1>Civ info not found: {civInfo}</h1>;
  }

  return (
    <Wrapper>
      <div className="container">
        <CivInfo civTree={civTree} />
        <CivTree civTree={civTree} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  .container {
    display: flex;
    height: 100vh;
  }

  .civ-info::-webkit-scrollbar {
    display: none;
  }
`;
export default CivilizationPage;
