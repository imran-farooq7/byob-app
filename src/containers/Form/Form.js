import React, { Component } from 'react'
import Spinner from '../../components/UI/Spinner/Spinner'
import instance from '../../axios'
import Button from '../../components/UI/Button/Button'
import styles from './form.module.css'
import Input from '../../components/UI/Input/Input'



class Form extends Component {
    state = {
        orderForm: {
            
            name: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value:''
            },
            
                street: {
                    elementType: "input",
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your street'
                    },
                    value:''
                },
                zipCode: {
                    elementType: "input",
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code'
                    },
                    value:''
                },
                country: {
                    elementType: "input",
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value:''
                },
            
            email: {
                elementType: "input",
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail'
                },
                value:''
            },
        },
    
    loading: false
    }
    inputHandler = (e,inputIndentifier) => {
console.log(e.target.value)
    }
orderHandler = (e) => {
    e.preventDefault()
    this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            
            deliveryMethod: 'fastest'
        }
        instance.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }



    render() {
        const formArray = []
        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
let form = (<form>
    
    {formArray.map(formElement => (
        <Input elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={this.inputHandler} />
    ))}
    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

        </form>)
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.Form}>
                <h4>Please enter your contact details</h4>
                {form}
            </div>
        )
    }
}
export default Form