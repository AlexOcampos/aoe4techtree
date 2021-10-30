import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CivInfo, CivTree } from "../components";
import { civilizations } from "../data/civs.json";
import {
  abbasid,
  chinese,
  hre,
  english,
  delhi,
  french,
  mongol,
} from "../data/civsInfo.json";
import { useItemDetailContext } from "../context/itemdetail_context";

const CivilizationPage = () => {
  const { updateCiv } = useItemDetailContext();
  const { id } = useParams();
  const [civTree, setCivTree] = useState({});

  useEffect(() => {
    const civilization = civilizations.filter((civ) => civ.id === parseInt(id));
    if (civilization && civilization.length > 0) {
      const { civInfo } = civilization[0];

      if (civInfo === "english") {
        setCivTree(english);
      } else if (civInfo === "chinese") {
        setCivTree(chinese);
      } else if (civInfo === "hre") {
        setCivTree(hre);
      } else if (civInfo === "abbasid") {
        setCivTree(abbasid);
      } else if (civInfo === "delhi") {
        setCivTree(delhi);
      } else if (civInfo === "french") {
        setCivTree(french);
      } else if (civInfo === "mongol") {
        setCivTree(mongol);
      }
    }
  }, []);

  useEffect(() => {
    console.log(`going to update civ: ${civTree.codeName}`);
    updateCiv(civTree.codeName);
  }, [civTree]);

  if (!civTree.civId) {
    return <h1>Civ info not found: id</h1>;
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
