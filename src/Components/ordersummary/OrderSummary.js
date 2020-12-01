import React from 'react'
import Auxo from '../../hoc/Auxo'
import Button from '../UI/button/Button'

const OrderSummary = (props) => {
    const ingredient = Object.keys(props.ingredients).map(igKey => {
        return(
        <li><span style={{textTransform: "capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}</li>
        )
    })
    return (
        <Auxo>
            <h3>Your order summary</h3>
            <p>Delicious burger</p>
            <ul>
                {ingredient}
            </ul>
            <p>Proceed to checkout?</p>
    <p><strong>Total price: {props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchasecancel}>CANCEL</Button><Button btnType="Success" clicked={props.purchaseit}>CONTINUE</Button>
        </Auxo>
    )
}

export default OrderSummary
