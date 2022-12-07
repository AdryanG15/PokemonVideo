import Axios from "axios";

export const FetchPokemonRequest = "FetchPokemonRequest";
export const FetchPokemonSuccess = "FetchPokemonSuccess";
export const FetchPokemonFailure = "FetchPokemonFailure";

export const fetchPokemonRequest = () => {
  return {
    type: FetchPokemonRequest,
  };
};

export const fetchPokemonSuccess = (Pokemon) => {
  return {
    type: FetchPokemonSuccess,
    payload: Pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FetchPokemonFailure,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response => {
          dispatch(fetchPokemonSuccess([response.data]))
        })
        .catch(error =>{
          dispatch(fetchPokemonFailure('No se encontro el Pokemon'))
        })
  };
};

export default fetchPokemon;
