import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav">
                <a href="/">
                    <img src='https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo.png' />
                </a>
                <ul>
                    <li><a href="/" style={{ textDecoration: 'none', color: "white" }}>Available Puppies</a></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar
