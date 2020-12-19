import React from 'react'

import products from '../data/products'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    function getProductsListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} - € {prod.price}
                </li>
        })
    }
    return (
        <div>
            <h2>Repetition</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}