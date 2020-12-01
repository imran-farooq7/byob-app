import React, { Component } from 'react'
import Auxo from '../../../hoc/Auxo'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BurgerControls/BurgerControls'
import OrderSummary from '../../ordersummary/OrderSummary'
import Modal from '../../UI/Modal'

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 1
}

export class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            meat:0,
            cheese: 0,
        },
        totalPrice: 4
    }
    addBurgerHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1
        const updatedCount = {
            ...this.state.ingredients
        }
        updatedCount[type] = updateCount;
        const priceAddition = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedCount,
            purchasAble: false,
            purchasing: false
        })

    }

    cancel = () =>{
        this.setState({purchasing:false})
    }
    purchasecont = () =>{
        alert("Continue")
    }
    purchasingHandler = () => {
        const ingredient = {
            ...this.state.ingredients
        }
        const sum = Object.keys(ingredient).map((igKey) => {
            return ingredient[igKey]
        })
        .reduce((sum,el) =>{
            return sum + el
        },0)
        this.setState({
            purchasAble: sum > 0
        })
    }
    purchased = () => {
        this.setState({
            purchasing:true
        })
    }
    removeBurgerHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
    if(oldCount <= 0 ){
return
        }
        const updateCount = oldCount - 1
        const updatedCount = {
            ...this.state.ingredients
        }
        updatedCount[type] = updateCount;
        const priceless = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceless;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedCount
        })
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0
        }
        return (
            <Auxo>
                <Modal show={this.state.purchasing} modalClosed={this.cancel}><OrderSummary ingredients={this.state.ingredients} purchasecancel={this.cancel} purchaseit={this.purchasecont}  price={this.state.totalPrice}/></Modal>
                
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls ingredientadd={this.addBurgerHandler} ingredientremove={this.removeBurgerHandler} disable={disableInfo}
                price={this.state.totalPrice}
                purchasAble={this.state.purchasAble}
                ordered={this.purchased}/>
                
            </Auxo>
        )
    }
}

export default BurgerBuilder
