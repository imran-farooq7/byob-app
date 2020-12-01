import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationalItems from '../NavigationalItems/NavigationalItems'
import style from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return (
        <div className={style.SideDrawer}>
            <div className={style.Logo}>
            <Logo />
            </div>
            <nav>
            <NavigationalItems />
            </nav>
        </div>
    )
}

export default SideDrawer
