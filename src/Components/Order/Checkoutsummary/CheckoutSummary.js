import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import style from './checkoutsummary.module.css'

const CheckoutSummary = (props) => {
    return (
        <div className={style.CheckoutSummary}>
            <h1>We hope you like the taste</h1>
            <div style={{ width: '100%',margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <div><Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button></div>
            
        </div>
    )
}

export default CheckoutSummary
