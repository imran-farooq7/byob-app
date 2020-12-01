import React from 'react'
import style from '../buildcontrol/buildcontrol.module.css'

const BuildControl = (props) => {
    return (
        <div className={style.BuildControl}>
            <div className={style.Label}>
                {props.label}
            </div>
            <button className={style.Less} onClick={props.removed} disable={props.disablee}>Less</button>
            <button className={style.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl
