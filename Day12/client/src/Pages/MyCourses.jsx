import React from 'react'
import NavBar from '../Components/NavBar'
import SideNavBar from '../Components/SideNavBar'

export default function MyCourses() {
    return (
        <div>
            <div className='navbar-container'>
                <NavBar />
                My Courses Page
            </div>
            <div>
                <SideNavBar />
            </div>
        </div>
    )
}
