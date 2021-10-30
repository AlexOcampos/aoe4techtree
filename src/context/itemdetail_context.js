import React, { useContext, useReducer } from "react";
import reducer from "../reducers/itemdetail_reducer";
import {
  ITEMDETAIL_OPEN,
  ITEMDETAIL_CLOSE,
  UPDATE_ITEM,
  CIV_UPDATE,
} from "../actions";

const initialState = {
  isItemDetailOpen: false,
  civCode: "",
  itemId: "",
  detail: {},
};

const ItemDetailContext = React.createContext();

export const ItemDetailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openItemDetail = (itemId) => {
    dispatch({ type: ITEMDETAIL_OPEN });
    dispatch({ type: UPDATE_ITEM, payload: { itemId } });
  };

  const closeItemDetail = () => {
    dispatch({ type: ITEMDETAIL_CLOSE });
  };

  const updateCiv = (civCode) => {
    console.log(`Civ detail: ${civCode}`);
    dispatch({ type: CIV_UPDATE, payload: { civCode } });
  };

  return (
    <ItemDetailContext.Provider
      value={{ ...state, openItemDetail, closeItemDetail, updateCiv }}
    >
      {children}
    </ItemDetailContext.Provider>
  );
};

export const useItemDetailContext = () => {
  return useContext(ItemDetailContext);
};
