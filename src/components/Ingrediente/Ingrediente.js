
import React from 'react';
import PropTypes from 'prop-types'; 

import "./Ingrediente.css"

class Ingrediente extends React.Component {
    
    render() {
        const ingrediente = this.props.ingrediente
        const precioText = ingrediente.precio ? "+ $" + ingrediente.precio : "GRATIS"
        const precioDiv = <div className="precio"><b>{precioText}</b></div>

        return <div className="ingrediente">
            <div className="nombre">{ingrediente.nombre}</div>{precioDiv}
            {this.props.buttonLabel && <div className="add-button-container"><button onClick={() => this.props.buttonAction(ingrediente)}>{this.props.buttonLabel}</button></div>}
        </div>
    }
}

Ingrediente.propTypes = {
    ingrediente: PropTypes.shape({
        nombre: PropTypes.string,
        precio: PropTypes.number
    }),
    buttonLabel: PropTypes.string,
    buttonAction: PropTypes.func
}

export default Ingrediente