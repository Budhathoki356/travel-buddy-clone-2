import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: "url(/img/hero-photo.jpg)" }}>
            <div className="container">
                <div className="header__content">
                    <Navbar />
                    <div className="header__content-inner">
                        <h4 className="header__item">NEW BOOK</h4>
                        <h1 className="header__item title-white">Travel Is <br /> Worth Your Time</h1>
                        <p className="header__item">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
                            laudantium accusamus repellendus enim nisi possimus, consequatur sunt alias
                            quod!
                        </p>
                        <button className="btn header__btn" type="submit">BUY THE BOOK</button>
                    </div>
                    <div className="header__lower">
                        <div className="search">
                            <input type="text" placeholder="Search Stories" />
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="video__carousel">
                            <div className="video">
                                <i className="fas fa-play"></i>
                                <img src="./img/photo-3.jpg" alt=""/>
                            </div>
                            <div className="option__btn">
                                <i className="arrow-left fas fa-arrow-left"></i>
                                <i className="arrow-right fas fa-arrow-right"></i>
                                <h4>GREAT NEW ZEALAND</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

