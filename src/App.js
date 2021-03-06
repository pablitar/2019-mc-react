import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListaIngredientes from './components/ListaIngredientes/ListaIngredientes';
import IngredientesData from './IngredientesData.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {ingredientesHamburguesa: []};
  }

  agregarIngrediente(unIngrediente) {
    this.setState({
      ...this.state,
      ingredientesHamburguesa: [...this.state.ingredientesHamburguesa, unIngrediente]})
  }

  quitarIngrediente(unIngrediente, numero) {
    const newIngredients = this.state.ingredientesHamburguesa.slice();
    newIngredients.splice(numero, 1)
    this.setState({
      ...this.state,
      ingredientesHamburguesa: newIngredients
    })
  }

  getCosto() {
    return this.state.ingredientesHamburguesa.reduce((total, ingrediente) => total + ingrediente.precio, 0);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Mc-React
        </header>
        <div className="content">
        <section>
          <h3>Elija sus ingredientes</h3>
          <ListaIngredientes ingredientes={IngredientesData} buttonLabel="+" buttonAction={(unIngrediente) => this.agregarIngrediente(unIngrediente)}></ListaIngredientes>
        </section>
        <section>
          <h3>Verifique Su Hamburguesa</h3>
          <span className="costo">Costo: <b>${this.getCosto()}</b></span>
          <ListaIngredientes ingredientes={this.state.ingredientesHamburguesa} buttonLabel="-" buttonAction={
            (unIngrediente, numero) => this.quitarIngrediente(unIngrediente, numero)}></ListaIngredientes>
        </section>
        </div>
      </div>
    );
  }
}

export default App;
