import styled from "styled-components";

import { Building } from "../components";
import HorizontalScroll from "react-scroll-horizontal";

/* 
  Calculate the max number of items in each building, to set the 
  correct width in all the columns of the same building 
*/
const calculateColumnsWidth = (tree) => {
  let sizeColumns = {};
  sizeColumns = tree.tree.map((age) => {
    return [
      age.items.map((building) => {
        return { id: building.id, items: building.items.length };
      }),
    ];
  });

  sizeColumns = sizeColumns.flat(2);

  let initialValue = {};
  sizeColumns = sizeColumns.reduce((result, item) => {
    if (!result[item.id]) {
      result[item.id] = item.items;
      return result;
    }

    if (result[item.id] && result[item.id] < item.items) {
      result[item.id] = item.items;
    }
    return result;
  }, initialValue);

  return sizeColumns;
};

const CivTree = ({ civTree }) => {
  let columnsWidth = calculateColumnsWidth(civTree);

  return (
    //TODO: refactor in a loop
    <CivTreeContainer>
      <HorizontalScroll reverseScroll={true}>
        <div className="row">
          {/* Dark Age */}
          <div className="age-header">
            <h1>I</h1>
          </div>
          <div className="buildings">
            {civTree.tree[0].items.map((building) => {
              return (
                <Building
                  key={`dark-age-${building.name}`}
                  building={building}
                  age={1}
                  columnsWidth={columnsWidth}
                />
              );
            })}
          </div>
        </div>
        <div className="row">
          {/* Feudal Age */}
          <div className="age-header">
            <h1>II</h1>
          </div>
          <div className="buildings">
            {civTree.tree[1].items.map((building) => {
              return (
                <Building
                  key={`feudal-${building.name}`}
                  building={building}
                  age={2}
                  columnsWidth={columnsWidth}
                />
              );
            })}
          </div>
        </div>
        <div className="row">
          {/* Castle Age */}
          <div className="age-header">
            <h1>III</h1>
          </div>
          <div className="buildings">
            {civTree.tree[2].items.map((building) => {
              return (
                <Building
                  key={`castle-${building.name}`}
                  building={building}
                  age={3}
                  columnsWidth={columnsWidth}
                />
              );
            })}
          </div>
        </div>
        <div className="row last-row">
          {/* Imperial Age */}
          <div className="age-header">
            <h1>IV</h1>
          </div>
          <div className="buildings">
            {civTree.tree[3].items.map((building) => {
              return (
                <Building
                  key={`imperial-${building.name}`}
                  building={building}
                  age={4}
                  columnsWidth={columnsWidth}
                />
              );
            })}
          </div>
        </div>
      </HorizontalScroll>
    </CivTreeContainer>
  );
};

const CivTreeContainer = styled.div`
  height: 100vh;
  margin-left: 2rem;
  width: 70vw;
  overflow: auto;

  .row {
    padding: 0;
    display: flex;
    border-bottom: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
  }

  .last-row {
    box-sizing: border-box;
  }

  .age-header {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      270deg,
      #535443 0%,
      rgba(209, 175, 101, 0.2) 100%
    );
    border: 3px solid #5d5127;
    box-sizing: border-box;
    text-align: center;
    h1 {
      font-size: 2.5rem;
      width: 3rem;
      background: linear-gradient(
        0deg,
        rgba(153, 154, 126, 1) 0%,
        rgba(209, 175, 101, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .buildings {
    display: flex;
  }

  .align-center-x2 {
    justify-content: center;
  }

  .scroll-horizontal > div {
    display: block !important;
  }
`;

export default CivTree;
