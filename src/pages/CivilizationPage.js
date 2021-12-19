import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  CivInfo,
  CivTree,
  FloatingButton,
  NavbarTreeMobile,
} from "../components";
import { civilizations } from "../data/civs.json";
import {
  abbasid,
  chinese,
  hre,
  english,
  delhi,
  french,
  mongol,
  rus,
} from "../data/civsInfo.json";
import { useItemDetailContext } from "../context/itemdetail_context";

const CivilizationPage = () => {
  const { updateCiv, navbarTreeMobileSelected, changeLocale } =
    useItemDetailContext();
  const { id, lang } = useParams();
  const [civTree, setCivTree] = useState({});

  useEffect(() => {
    if (lang) {
      console.log(`Lang is ${lang}`);
      changeLocale(lang);
    } else {
      console.log(`Use default lang`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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
      } else if (civInfo === "rus") {
        setCivTree(rus);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    console.log(`going to update civ: ${civTree.codeName}`);
    updateCiv(civTree.codeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [civTree]);

  if (!civTree.civId) {
    return <h1>Civ info not found: id</h1>;
  }

  return (
    <Wrapper>
      <div className="container web">
        <CivInfo civTree={civTree} />
        {
          /* 2 means we're in mobile */
          navbarTreeMobileSelected === 2 ? "" : <CivTree civTree={civTree} />
        }
        <FloatingButton title={"Feedback"} />
      </div>
      <div className="mobile">
        {navbarTreeMobileSelected === 1 ? (
          <CivInfo civTree={civTree} />
        ) : (
          <CivTree civTree={civTree} />
        )}
        <NavbarTreeMobile />
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

  @media (max-width: 600px) {
    .web {
      display: none;
    }

    .mobile {
      width: 100vw;
    }
  }

  @media (min-width: 600px) {
    .mobile {
      display: none;
    }
  }
`;
export default CivilizationPage;
