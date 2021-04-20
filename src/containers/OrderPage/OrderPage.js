import React, { Component } from "react";
// import instance from "../../axios";
import Order from "../../components/Order/Order";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class OrderPage extends Component {
  //   state = {
  //     orders: [],
  //     loading: true,
  //   };
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    return (
      <div>
        {this.props.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
