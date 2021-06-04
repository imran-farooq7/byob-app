import instance from "../../axios";
import * as actionTypes from "./actionTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};
export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStarting());

    instance
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        // console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
export const purchaseBurgerStarting = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};
export const fetchOrders = (token) => {
  return (dispatch) => {
    instance
      .get("/orders.json?auth=" + token)
      .then((res) => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
