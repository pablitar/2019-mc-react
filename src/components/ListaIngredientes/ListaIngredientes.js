import React from 'react';

import Ingrediente from '../Ingrediente/Ingrediente';

class ListaIngredientes extends React.Component {
    render() {
        const ingredientesDibujados = this.props.ingredientes.map(
            (ingrediente, index) => <Ingrediente ingrediente={ingrediente} 
            key={index} index={index} buttonLabel={this.props.buttonLabel} buttonAction={this.props.buttonAction}></Ingrediente>
            ) 
        return <div className="listaIngredientes">
            {ingredientesDibujados}
        </div>
    }
}

export default ListaIngredientes 
