import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import instance from "../../axios";
import Button from "../../components/UI/Button/Button";
import styles from "./form.module.css";
import Input from "../../components/UI/Input/Input";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Form extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validation: {
          required: true,
          minLenght: "5",
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your e-mail",
        },
        value: "",
        validation: {
          required: true,
        },
      },
    },
  };
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLenght) {
      isValid = value.lenght > rules.minLenght && isValid;
    }
    return isValid;
  };

  inputHandler = (e, inputIndentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedOrderFormElement = { ...updatedOrderForm[inputIndentifier] };
    updatedOrderFormElement.value = e.target.value;
    updatedOrderFormElement.valid = this.checkValidity(
      updatedOrderFormElement.value,
      updatedOrderFormElement.validation
    );
    updatedOrderFormElement.touched = true;
    console.log(updatedOrderFormElement);
    updatedOrderForm[inputIndentifier] = updatedOrderFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIndentifier in this.state.orderForm) {
      formData[formElementIndentifier] = this.state.orderForm[
        formElementIndentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderdata: formData,
    };
    this.props.onBurgerOrder(order);
  };

  render() {
    const formArray = [];
    for (let key in this.state.orderForm) {
      formArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formArray.map((formElement) => (
          <Input
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(e) => this.inputHandler(e, formElement.id)}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.validation.valid}
          />
        ))}
        <Button btnType="Success">ORDER</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.Form}>
        <h4>Please enter your contact details</h4>
        {form}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onBurgerOrder: (orderData) =>
      dispatch(actions.purchaseBurgerStart(orderData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
