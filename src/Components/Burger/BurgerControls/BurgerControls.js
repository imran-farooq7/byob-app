import React from 'react'
import style from '../BurgerControls/burgercontrols.module.css'
import BuildControl from './buildcontrol/BuildControl'

const controls = [
    {label:"Salad",type:"salad"},
    {label:"Cheese",type:"cheese"},
    {label:"meat",type:"meat"},
    {label:"Bacon",type:"bacon"},
]

 const BurgerControls = (props) => {
    return (
        <div className={style.buildcontrol}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => (
                    <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientadd(ctrl.type)} removed={() => props.ingredientremove(ctrl.type)}
                    disablee={props.disable[ctrl.type]} />
                ))
            }
            <button className={style.OrderButton}
            disable={!props.purchasAble} onClick={props.ordered}>OREDER NOW</button>
        </div>
    )
}

export default BurgerControls