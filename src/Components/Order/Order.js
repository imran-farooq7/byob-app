import React from 'react'
import styles from './order.module.css'

const Order = (props) => {
    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName],

        })


    }
    const ingredientOutPut = ingredients.map(ig => {
        return <span key={ig.name} style={{
            textTransform: 'capitalize', margin: '0 8px', border: "1px solid #ccc",
        display:"inline-block",padding:'5px'}}>{ig.name} ({ig.amount})</span>
    })
        
        
    return (
        <div className={styles.Order}>
            <p>ingredients: {ingredientOutPut}</p>
            <p>Price: <strong>USD: {props.price}</strong></p>
        </div>
    )
}

export default Order
