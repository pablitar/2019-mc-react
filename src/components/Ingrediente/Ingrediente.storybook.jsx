 import React from 'react';
import { storiesOf } from '@storybook/react';

import Ingrediente from "./Ingrediente"

storiesOf('Ingrediente', module)
    .add("simple usage", () => <div style={{width: "50%"}}><Ingrediente ingrediente={{nombre: "lechuga", precio: 1.50}}></Ingrediente></div>)
    .add("con botón", () => <div style={{width: "50%"}}><Ingrediente ingrediente={{nombre: "tomate", precio: 15}} includeAddButton={true}></Ingrediente></div>)
    .add("gratis", () => <Ingrediente ingrediente={{nombre: "agua"}}></Ingrediente>)

