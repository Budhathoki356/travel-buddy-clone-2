import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="social-media">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <h4 className="navbar__logo">
                EARTHTRIP
            </h4>
            <i className="fas fa-bars"></i>
        </nav>
    )
}

export default Navbar
