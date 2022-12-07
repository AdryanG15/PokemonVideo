import React, { Component } from 'react'
import {connect} from 'react-redux'

class CantidadPokemon extends Component {
  render() {
    return (
    <React.Fragment>
        Unidades: {this.props.gameShop.pokemon}
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    gameShop: state.gameShop
  }
}

export default connect(mapStateToProps)(CantidadPokemon);