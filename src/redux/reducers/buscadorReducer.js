import {FetchPokemonFailure, FetchPokemonRequest, FetchPokemonSuccess} from '../actions/buscadorAction'

const initialState = {
    loading: false,
    pokemon: [],
    error:''
}

const buscador = (state = initialState, action) => {
    switch(action.type) {
        case FetchPokemonRequest:
            return{
                ...state,
                loading: true
            }

        case FetchPokemonSuccess:
            return {
                loading: false,
                pokemon:action.payload,
                error:''
            }

        case FetchPokemonFailure:
            return {
                loading: false,
                pokemon:[],
                error:action.payload
            }

        default: return state;
        
    }
}

export default buscador;