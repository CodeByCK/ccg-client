import React, { Fragment } from 'react'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav">
                <img src='https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo.png' />

                <ul>
                    <li>Available Puppies</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar
