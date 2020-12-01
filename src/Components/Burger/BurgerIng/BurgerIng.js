import PropTypes from 'prop-types'
import React from 'react'
import Styles from './burgering.module.css'

function BurgerIng(props) {
    let ingredients = null
    switch (props.type) {
        case ('bread-bottom'):
            ingredients = <div className={Styles.BreadBottom}></div>
            
            break;
            case ('bread-top'):
            ingredients = (
                <div className={Styles.BreadTop}>
                    <div className={Styles.Seeds1}></div>
                    <div className={Styles.Seeds2}></div>
                </div>
            )
            
            break;
            case ('meat'):
            ingredients = <div className={Styles.Meat}></div>
            
            break;
            case ('cheese'):
            ingredients = <div className={Styles.Cheese}></div>
            
            break;
            case ('bacon'):
            ingredients = <div className={Styles.Bacon}></div>
            
            break;
            case ('salad'):
            ingredients = <div className={Styles.Salad}></div>
            
            break;
    
        default: ingredients =null
            

            
    }
    return ingredients
    
}
BurgerIng.prototype = {
    type : PropTypes.string.isRequired
}

export default BurgerIng
