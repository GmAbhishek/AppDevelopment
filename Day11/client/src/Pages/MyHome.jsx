import React from 'react'
import NavBar from '../Components/NavBar'
import SideNavBar from '../Components/SideNavBar'

export default function MyHome() {
    return (
        <div>
            <div className='navbar-container'>
                <NavBar />
                HOME PAGE
            </div>
            <div>
                <SideNavBar />
            </div>
        </div>
    )
}
