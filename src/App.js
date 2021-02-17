import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import OrderPage from './containers/OrderPage/OrderPage';


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/orders' exact component={OrderPage} />
          <Route path='/checkout' component={Checkout} />
          
        </Layout>
      </div>
    );
  }
}

export default App;
