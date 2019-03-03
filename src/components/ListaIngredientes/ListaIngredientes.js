import React from 'react';
import PropTypes from 'prop-types'; 

import Ingrediente from '../Ingrediente/Ingrediente';

class ListaIngredientes extends React.Component {
    render() {
        const ingredientesDibujados = this.props.ingredientes.map(
            (ingrediente) => <Ingrediente ingrediente={ingrediente} buttonLabel={this.props.buttonLabel} buttonAction={this.props.buttonAction}></Ingrediente>
            ) 
        return <div className="listaIngredientes">
            {ingredientesDibujados}
        </div>
    }
}

export default ListaIngredientes 
