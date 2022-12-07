import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
//import CantidadPokemon from "./components/CantidadPokemon";
//import ComprarPokemon from "./components/CompraPokemon";
import store from "./redux/store";
import {Provider} from 'react-redux'
import CantPokHook from "./components/CantPokHook";
import ComPokHook from "./components/ComPokHook";
import BuscadorPokemon from "./components/Buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/Buscador/ResultadoPokemon";

const estilos = {
  btn: {
    backgroundColor:'#2E3142',

  }
}
function App() {
  return (
    <Provider store={store}>
    <div style={estilos.btn} className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{maxWidth: '370px'}}>
            <div className="row no gutters">
              <div className="col-4">
                <img src={require("./img/pokemon.jpg")} alt='pokemon' className="card-img"/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantPokHook/>
                  </div>
                  <ComPokHook/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 border-top pt-3">
          <BuscadorPokemon/>
        </div>

        <div className="col-12">
          <ResultadoPokemon/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
