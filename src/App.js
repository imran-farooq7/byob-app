import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Auth from "";
import Logout from "./containers/Auth/logout/Logout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "";
// import OrderPage from "";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/async/asyncComponent";

const asyncCheckout = asyncComponent(() => {
  return import("./containers/checkout/Checkout");
});
const asyncOrders = asyncComponent(() => {
  return import("./containers/OrderPage/OrderPage");
});
const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});
class App extends Component {
  componentDidMount() {
    this.props.onTryAuthSignUp();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isauthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" exact component={asyncAuth} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/orders" exact component={asyncOrders} />
          <Route path="/checkout" component={asyncCheckout} />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isauthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAuthSignUp: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
