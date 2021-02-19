import React from 'react'

const Advice = () => {
    return (
        <div className="advice">
            <div className="container">
                <div className="advice__inner">
                    <h1 className="title-black">
                        Get Confident <br /> With Our Advice
                    </h1>
                    <div className="advice__items">
                        <div className="advice__item">
                            <img src="./img/photo-1.jpg" alt="" />
                            <div className="overlay">
                                <span className="advice__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </div>
                        </div>
                        <div className="advice__item">
                            <img src="./img/photo-3.jpg" alt="" />
                            <div className="overlay">
                                <span className="advice__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </div>
                        </div>
                        <div className="advice__item">
                            <img src="./img/photo-4.jpg" alt="" />
                            <div className="overlay">
                                <span className="advice__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </span>
                            </div>
                        </div>
                        <div className="advice__item">
                            <img src="./img/photo-5.jpg" alt="" />
                            <div className="overlay">
                                <span className="advice__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advice
