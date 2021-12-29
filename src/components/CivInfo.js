import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { urlStatic } from "../utils/constants";
import Select from "react-select";
import { useItemDetailContext } from "../context/itemdetail_context";
import { civilizations } from "../data/civs.json";

const CivInfo = ({ civTree }) => {
  const { changeLocale, lang, civCode, loadText } = useItemDetailContext();
  let history = useHistory();

  const languages = [
    { label: "english", value: "en" },
    { label: "chinese", value: "zh" },
  ];

  const handleLanguageChange = (selectedLang) => {
    changeLocale(selectedLang.value);

    const civilization = civilizations.filter(
      (civ) => civ.codeName === civCode
    );
    history.push(
      `/civilization/${civilization[0].id}/lang/${selectedLang.value}`
    );
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted var(--clr-grey-5)",
      color: state.isSelected ? "var(--clr-primary-1)" : "var(--clr-white)",
      padding: 4,
      backgroundColor: "var(--clr-primary-background)",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 120,
      minHeight: "38px",
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "var(--clr-white)",
      display: "flex",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = "white";

      return { ...provided, opacity, transition, color };
    },
    menuList: () => ({
      backgroundColor: "var(--clr-primary-background)",
      borderRadius: "8px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "var(--clr-white)",
    }),
  };

  let civName = civTree.civName;
  let shortDesc = civTree.shortDesc;
  let longDesc = civTree.longDesc;

  let l18nName = loadText(`civName_${civCode}`);
  let l18nShortDesc = loadText(`civShortDesc_${civCode}`);
  let l18nLongDesc = loadText(`civLongDesc_${civCode}`);

  civName = l18nName ? l18nName : civName;
  shortDesc = l18nShortDesc ? l18nShortDesc : shortDesc;
  longDesc = l18nLongDesc ? l18nLongDesc : longDesc;

  return (
    <CivInfoContainer className="civ-info">
      <nav>
        <Link to={"/"}>
          <HiMenu /> AoE4 Tech Tree
        </Link>
        <Select
          options={languages}
          defaultValue={languages.filter((l) => l.value === lang)}
          onChange={handleLanguageChange}
          styles={customStyles}
        />
      </nav>
      <div
        className="bg"
        style={{
          backgroundImage: `url("${urlStatic}/flags/${civTree.image}")`,
          opacity: civTree.civId === 2 ? 0.8 : 0.4,
        }}
      ></div>
      <header>
        {civTree.civId ? (
          <h1 style={{ marginBottom: 0, marginTop: 0 }}>{civName}</h1>
        ) : (
          <h1>{civName}</h1>
        )}
        <h2>{shortDesc}</h2>
        <p>{longDesc}</p>
      </header>

      <div className="civ-explanation">
        {civTree.infoAndBonus.map((info, infoIndex) => {
          let title = info.title;
          let description = info.description;

          let l18nTitle = loadText(
            `infoAndBonus_${civCode}_${infoIndex}_title`
          );
          let l18nDescription = loadText(
            `infoAndBonus_${civCode}_${infoIndex}_description`
          );

          title = l18nTitle ? l18nTitle : title;
          description = l18nDescription ? l18nDescription : description;

          return (
            <article key={`info-${infoIndex}`}>
              <h3>{title}</h3>
              {description ? <p>{description}</p> : ""}
              {info.list ? (
                <ul>
                  {info.list.map((li, index) => {
                    let item = li;

                    let l18nItem = loadText(
                      `infoAndBonus_${civCode}_${infoIndex}_list_${index}`
                    );
                    item = l18nItem ? l18nItem : item;

                    return <li key={`info-${infoIndex}-${index}`}>{item}</li>;
                  })}
                </ul>
              ) : (
                ""
              )}
            </article>
          );
        })}
      </div>
    </CivInfoContainer>
  );
};

const CivInfoContainer = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  height: 100vh;
  padding: 0.6rem;
  width: 30vw;
  border: 3px solid var(--clr-primary-1);
  box-sizing: border-box;
  background: var(--clr-primary-background);
  background: linear-gradient(
    90deg,
    rgba(38, 50, 67, 1) 0%,
    rgba(37, 48, 66, 0.2) 100%
  );

  @media (min-width: 1920px) {
    width: 580px;
  }

  position: relative;
  z-index: 1;

  nav {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28vw;
  }

  @media (max-width: 600px) {
    nav {
      width: 90vw;
    }
  }

  nav > * {
    text-decoration: none;
    color: #ffffff;
  }

  nav > *:hover {
    text-decoration: none;
    color: var(--clr-primary-1);
  }

  .bg {
    position: absolute;
    z-index: -1;
    top: 3.8rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;

    background-position: center top;
  }

  header {
    margin-top: 3rem;
    margin-bottom: 6rem;
  }

  .civ-explanation {
    article {
      margin-bottom: 3rem;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: normal;
    background: var(--clr-primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 92vh;
  }
`;

export default CivInfo;
