import React from 'react'
import Auxo from '../../hoc/Auxo'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Styles from './layout.module.css'

function Layout(props) {
    return (
        <Auxo>
            <Toolbar />
            <SideDrawer />
        <main className={Styles.content}>
{props.children}
        </main>
        </Auxo>
        
    )
}

export default Layout
