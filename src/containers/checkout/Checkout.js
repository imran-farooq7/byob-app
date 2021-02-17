import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/Checkoutsummary/CheckoutSummary'
import Form from '../Form/Form'

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === "price") {
                price = params[1]
            }
            else {
                ingredients[params[0]] = +params[1]
            }
            
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price,
        })


    }
    checkoutCancelled = () => {
        this.props.history.goBack()
    }
    checkoutContinued = () => {
        this.props.history.replace("/checkout/form")
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelled} checkoutContinued={this.checkoutContinued} />
                <Route path={this.props.match.path + "/form"} render={(props)=>(<Form ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        )
    }
}
export default Checkout