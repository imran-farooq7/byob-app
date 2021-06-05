import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/Checkoutsummary/CheckoutSummary";
import Form from "../Form/Form";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  UNSAFE_componentWillMount() {
    this.props.onInitPurchase();
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/form");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelled}
            checkoutContinued={this.checkoutContinued}
          />
          <Route
            path={this.props.match.path + "/form"}
            render={(props) => (
              <Form ingredients={this.props.ings} Component={Form} />
            )}
          />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
