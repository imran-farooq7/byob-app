import React from 'react'
import style from './button.module.css'

const Button = (props) => {
    return (
        <button
        onClick={props.clicked}
        className={[style.Button,style[props.btnType]].join(" ")}>
            {props.children}
        </button>
    )
}

export default Button
