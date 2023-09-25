import React from "react"
import { Link } from "react-router-dom"
import "../CSS/Header.css"

const Header = () => {

    return (
        <>
            <header>
                <div className="row">
                    <nav className='' >
                        <ul className='' style={{ display: 'flex', flexDirection: "row", listStyleType: 'none' }}>
                            <div className="col-8 d-flex">
                                <li>
                                    <Link to='/courses' style={{ textDecoration: 'none' }}>EXPLORE COURSES</Link>
                                </li>
                                <li>
                                    <Link to='/about' style={{ textDecoration: 'none' }}>ABOUT US</Link>
                                </li>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <li>
                                    <Link to='/signup' style={{ textDecoration: 'none' }}>SIGN UP</Link>
                                </li>
                                <li>
                                    <Link to='/login' style={{ textDecoration: 'none' }}>LOGIN</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header