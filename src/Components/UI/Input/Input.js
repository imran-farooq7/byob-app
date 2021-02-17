import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={styles.inputElement} {...props.elementConfig}value={props.value} onChange={props.changed}/>
            break;
            case ('textarea'):
                inputElement = <textarea className={styles.inputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
                break;
    
        default:
            inputElement = <input className={styles.inputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input