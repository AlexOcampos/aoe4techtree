import React, { useContext, useReducer } from "react";
import reducer from "../reducers/itemdetail_reducer";
import {
  ITEMDETAIL_OPEN,
  ITEMDETAIL_CLOSE,
  UPDATE_ITEM,
  CIV_UPDATE,
  ITEMNAVBARTREEMOB_SELECTED,
  CHANGE_LOCALE,
} from "../actions";

const defaultLang = "cn";
const languages = {
  en: require("../data/locales/en/strings.json"),
  zh: require("../data/locales/zh/strings.json"),
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
    const translations = languages[state.lang];
    return translations[id];
  };

  const changeLocale = (lang) => {
    if (lang && languages[lang]) {
      dispatch({ type: CHANGE_LOCALE, payload: { lang } });
    }
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
        changeLocale,
      }}
    >
      {children}
    </ItemDetailContext.Provider>
  );
};

export const useItemDetailContext = () => {
  return useContext(ItemDetailContext);
};
