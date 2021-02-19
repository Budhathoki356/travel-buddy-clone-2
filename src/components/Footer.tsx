import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__upper">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__col">
                            <h3>COMPANY</h3>
                            <ul>
                                <li>About</li>
                                <li>Press</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Security</li>
                                <li>Drive Center</li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h3>INFORMATION</h3>
                            <ul>
                                <li>Our Story</li>
                                <li>Press</li>
                                <li>Resource</li>
                                <li>Careers</li>
                                <li>Newslist</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h3>INFORMATION</h3>
                            <ul>
                                <li>About</li>
                                <li>Press</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Security</li>
                                <li>Drive Center</li>
                            </ul>
                        </div>
                        <div className="footer__col ">
                            <h3>SUBSCRIBE NOW</h3>
                            <form className="footer__form">
                                <input type="text" name="" id="" placeholder="Your email" />
                                <button className="btn" type="submit">SUBSCRIBE NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__lower">
                <div className="container">
                    <div className="footer__lower--inner">
                        <div className="footer__lower--left">
                            <span>&copy; Mass Information. All rights reserved. </span>
                        </div>
                        <div className="footer__lower--right">
                            <span>Private Policy</span>
                            <span>Term Of service</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
