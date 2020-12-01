import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationalItems from '../NavigationalItems/NavigationalItems'
import style from './Toolbar.module.css'

const Toolbar = (props) => {
    return (
        <header className={style.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationalItems />
            </nav>
        </header>
    )
}

export default Toolbar
