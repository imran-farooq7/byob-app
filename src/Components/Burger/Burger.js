import React from 'react'
import styles from './burger.module.css'
import BurgerIng from './BurgerIng/BurgerIng'

function Burger(props) {
    let transIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIng key={igKey + i} type={igKey} />
        })        
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])
    if (transIngredients.length === 0) {
        transIngredients = <p>Please add ingredients</p>
   }
    return (
        <div className={styles.Burger}>
            <BurgerIng type="bread-top" />
            {transIngredients}
            <BurgerIng type="bread-bottom" />
            
        </div>
    )
}

export default Burger
