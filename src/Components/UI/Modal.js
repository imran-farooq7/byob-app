import React from 'react'
import Auxo from '../../hoc/Auxo'
import Backdrop from './backdrop/Backdrop'
import style from './modal.module.css'

const Modal = (props) => (

    
        <Auxo>
            <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={style.Modal}
        style={{transform: props.show? "translateY(0)" : "translateY(-100vh)"}}>
            {props.children}
        </div>
        </Auxo>
    
)

export default Modal
