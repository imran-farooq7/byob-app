

import classes from './Modal.module.css';
import Auxo from '../../../hoc/Auxo';
import Backdrop from '../Backdrop/Backdrop';

import React, { Component } from 'react'

export class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    componentDidUpdate(){
        console.log('[Modal] updated')
    }
    render() {
        return (
            <Auxo>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
           <div
           
               className={classes.Modal}
               style={{
                   transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                   opacity: this.props.show ? '1' : '0'
               }}>
               {this.props.children}
           </div>
          
       </Auxo>
        )
    }
}

export default Modal


