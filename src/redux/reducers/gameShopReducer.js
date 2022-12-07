import { BuyPokemon, ReturnPokemon } from "../actions/gameShopAction";

const defaultGameShop = {
  pokemon: 30,
};

const gameShop = (state = defaultGameShop, action) => {
  switch (action.type) {
    case BuyPokemon: {
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    }
    case ReturnPokemon: {
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };
    }
    default:
      return state;
  }
};

export default gameShop;
