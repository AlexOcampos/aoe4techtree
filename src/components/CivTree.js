import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  Building,
  BottomSheetTitle,
  BottomSheetUnit,
  BottomSheetTech,
  BottomSheetBuilding,
} from "../components";

import mayus from "../resources/mayus-key.png";
import "animate.css";

// ItemDetail
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useItemDetailContext } from "../context/itemdetail_context";

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
  const [showWheelTooltip, setShowWheelTooltip] = useState(false);
  const { isItemDetailOpen, closeItemDetail, detail } = useItemDetailContext();
  let columnsWidth = calculateColumnsWidth(civTree);

  const onWheelEvent = (e) => {
    if (!e.shiftKey) {
      setShowWheelTooltip(true);
    }
  };

  useEffect(
    () => {
      if (showWheelTooltip) {
        let timer1 = setTimeout(() => setShowWheelTooltip(false), 1 * 1000);
        return () => {
          clearTimeout(timer1);
        };
      }

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [showWheelTooltip]
  );

  return (
    //TODO: refactor in a loop
    <CivTreeContainer>
      <div onWheel={onWheelEvent}>
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
      </div>

      <BottomSheet
        open={isItemDetailOpen}
        header={
          detail ? <BottomSheetTitle title={detail.customName} /> : "<NO DATA>"
        }
        onDismiss={closeItemDetail}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 5,
          maxHeight * 0.6,
        ]}
      >
        {detail && detail.genre ? (
          detail.genre === "Tech." ? (
            <BottomSheetTech detail={detail} />
          ) : detail.genre === "Structure" ? (
            <BottomSheetBuilding detail={detail} />
          ) : (
            <BottomSheetUnit detail={detail} />
          )
        ) : (
          <p style={{ color: "black", marginLeft: "3rem" }}>No data</p>
        )}
      </BottomSheet>

      {showWheelTooltip ? (
        <div className="wheel-tooltip animate__animated animate__fadeInUp">
          Hold <img src={mayus} alt="mayus" /> to scroll horizontally
        </div>
      ) : (
        <div className="wheel-tooltip animate__animated animate__fadeOutDown">
          Hold <img src={mayus} alt="mayus" /> to scroll horizontally
        </div>
      )}
    </CivTreeContainer>
  );
};

const CivTreeContainer = styled.div`
  height: 100vh;
  margin-left: 2rem;
  width: 68vw;
  overflow: auto;

  .wheel-tooltip {
    position: fixed;
    bottom: 3rem;
    left: 50%;
    background-color: var(--clr-primary-background-3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 12px;
    font-size: 2rem;
    color: var(--clr-primary-1);

    img {
      width: 10rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  .popup-container {
    color: black;
  }

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
    background: var(--clr-primary-background-gradient);
    border: 3px solid var(--clr-primary-1);
    box-sizing: border-box;
    text-align: center;
    h1 {
      font-size: 2.5rem;
      width: 3rem;
      background: var(--clr-primary-gradient);
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
