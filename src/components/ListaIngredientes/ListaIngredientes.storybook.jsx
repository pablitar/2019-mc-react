import React from 'react';
import { storiesOf } from '@storybook/react';

import ListaIngredientes from "./ListaIngredientes"

storiesOf('ListaIngredientes', module)
    .add("con ingredientes", () => <ListaIngredientes ingredientes={[
        {nombre: "pan", precio: 5},
        {nombre: "lechuga", precio: 10},
        {nombre: "carne", precio: 20},
        {nombre: "cebolla", precio: 8}
    ]}></ListaIngredientes>)

