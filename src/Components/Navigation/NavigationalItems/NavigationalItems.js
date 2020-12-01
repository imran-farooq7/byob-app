
import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import style from './NavigationalItems.module.css'

const NavigationalItems = (props) => {
    return (
        <ul className={style.NavigationItems}>
<NavigationItem link="/" active>Burger</NavigationItem>
<NavigationItem link="/" >Burger</NavigationItem>
        </ul>
    )
}

export default NavigationalItems
