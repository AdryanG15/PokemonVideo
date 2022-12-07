export const BuyPokemon = 'BuyPokemon';
export const ReturnPokemon = 'ReturnPokemon';

export const buyPokemonAction = (cant) =>{
    return{
        type: BuyPokemon,
        payload:cant
    }
}

export const returnPokemonAction = (cant) =>{
    return{
        type: ReturnPokemon,
        payload:cant
    }
}