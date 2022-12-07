import React from 'react'
import { useSelector } from 'react-redux';

const CantPokHook = () => {

    const gameShop = useSelector((state) => state.gameShop.pokemon);

  return (
    <React.Fragment>
        Unidades: {gameShop}
    </React.Fragment>
  )
}

export default CantPokHook;