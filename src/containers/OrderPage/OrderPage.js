import React, { Component } from 'react'
import instance from '../../axios'
import Order from '../../components/Order/Order'

class OrderPage extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        instance.get("/orders.json")
            .then(res => {
                const fetchOrders = []
                for (let key in res.data) {
                    fetchOrders.push({...res.data[key],id:key,})
                }
                this.setState({ loading: false, orders: fetchOrders,})
            })
            .catch(err => {
                this.setState({ loading:false})
        })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order key={order.id} ingredients={order.ingredients}
                price={order.price}    />
                }
                )}
            </div>
        )
    }
}

export default OrderPage
