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
          <ListaIngredientes ingredientes={this.state.ingredientesHamburguesa} buttonLabel="-" buttonAction={
            (unIngrediente, numero) => this.quitarIngrediente(unIngrediente, numero)}></ListaIngredientes>
        </section>
        </div>
      </div>
    );
  }
}

export default App;
