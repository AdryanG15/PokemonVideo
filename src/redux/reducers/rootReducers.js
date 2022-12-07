import { combineReducers } from "redux";
import buscador from "./buscadorReducer";
import gameShop from "./gameShopReducer";

const rootReducers = combineReducers({
  gameShop,
  buscador
});

export default rootReducers;
