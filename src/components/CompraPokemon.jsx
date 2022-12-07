import React, { Component } from "react";
import { connect } from "react-redux";
import {
  buyPokemonAction,
  returnPokemonAction,
} from "../redux/actions/gameShopAction";

class ComprarPokemon extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-dark btn-sm mb-2" onClick={() => {
            this.props.buyPokemonAction(1)
        }}>Compras Pokemon</button>

        <button className="btn btn-dark btn-sm" onClick={() => {
            this.props.returnPokemonAction(1)
        }}>Regresar Pokemon</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  buyPokemonAction,
  returnPokemonAction,
};

export default connect(null, mapDispatchToProps)(ComprarPokemon);
