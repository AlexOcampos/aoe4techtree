import {
  ITEMDETAIL_OPEN,
  ITEMDETAIL_CLOSE,
  UPDATE_ITEM,
  CIV_UPDATE,
  ITEMNAVBARTREEMOB_SELECTED,
  CHANGE_LOCALE,
} from "../actions";
import { stats } from "../data/data_20211101.json";

const itemdetail_reducer = (state, action) => {
  if (action.type === ITEMDETAIL_OPEN) {
    return { ...state, isItemDetailOpen: true };
  }
  if (action.type === ITEMDETAIL_CLOSE) {
    return { ...state, isItemDetailOpen: false };
  }

  if (action.type === UPDATE_ITEM) {
    const { itemId } = action.payload;
    var toRet = undefined;
    if (state && state.civCode && stats) {
      let itemStats = stats.filter((item) => {
        if (item[`${state.civCode.toLowerCase()}`] && item["id"] === itemId) {
          return item;
        }
        return undefined;
      });

      if (itemStats && itemStats.length > 0) {
        toRet = itemStats[0];
      } else {
        console.log(
          `No stats for "${itemId}" item of the "${state.civCode}"" civilization`
        );
      }
    }
    return { ...state, itemId: itemId, itemName: itemId, detail: toRet };
  }

  if (action.type === CIV_UPDATE) {
    const { civCode } = action.payload;
    return { ...state, civCode: civCode };
  }

  if (action.type === ITEMNAVBARTREEMOB_SELECTED) {
    const { option } = action.payload;
    return { ...state, navbarTreeMobileSelected: option };
  }

  if (action.type === CHANGE_LOCALE) {
    const { lang } = action.payload;
    return { ...state, lang: lang };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default itemdetail_reducer;
