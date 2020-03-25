import React from 'react';
import Item from './Item'

function ListaDeCompras() {
    return (
        <ul>
            <Item nome="Arroz" />
            <Item nome="Feijão" />
            <Item nome="Batata" />
            <Item nome="Macarrão" />
            <Item nome="Papel Higiênico" />
        </ul>
    );
}

export default ListaDeCompras