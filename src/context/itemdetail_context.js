import React, { useContext, useReducer } from "react";
import reducer from "../reducers/itemdetail_reducer";
import {
  ITEMDETAIL_OPEN,
  ITEMDETAIL_CLOSE,
  UPDATE_ITEM,
  CIV_UPDATE,
  ITEMNAVBARTREEMOB_SELECTED,
} from "../actions";

const defaultLang = "en";
const languages = {
  en: require("../data/locales/en/strings.json"),
  jp: require("../data/locales/jp/strings.json"),
};

const initialState = {
  navbarTreeMobileSelected: 1,
  isItemDetailOpen: false,
  civCode: "",
  itemId: "",
  detail: {},
  lang: "en",
  localeData: languages[defaultLang],
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
    dispatch({ type: CIV_UPDATE, payload: { civCode } });
  };

  const updateItemNavbarTreeMobile = (option) => {
    dispatch({ type: ITEMNAVBARTREEMOB_SELECTED, payload: { option } });
  };

  const loadText = (id) => {
    const translations = languages[defaultLang];
    return translations[id];
  };

  return (
    <ItemDetailContext.Provider
      value={{
        ...state,
        openItemDetail,
        closeItemDetail,
        updateCiv,
        updateItemNavbarTreeMobile,
        loadText,
      }}
    >
      {children}
    </ItemDetailContext.Provider>
  );
};

export const useItemDetailContext = () => {
  return useContext(ItemDetailContext);
};
