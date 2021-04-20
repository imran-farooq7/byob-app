import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./auth.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        value: "",
        validation: {
          required: true,
          minLenght: 6,
        },
        valid: false,
        touched: false,
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

  inputChangeHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({
      controls: updatedControls,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  render() {
    const formArray = [];
    for (let key in this.state.controls) {
      formArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = formArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={(e) => this.inputChangeHandler(e, formElement.id)}
        touched={formElement.config.touched}
        shouldValidate={formElement.config.validation}
        invalid={!formElement.config.validation.valid}
      />
    ));
    return (
      <div className={styles.Auth}>
        <form onSubmit={this.submitForm}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};
export default connect(null, mapDispatchToProps)(Auth);
