import React from 'react'

const Feature = () => {
    return (
        <div className="feature" style={{ backgroundImage: "url(/img/photo-14.jpg)" }}>
            <div className="container align-center">
                <div className="feature__left">
                    <div className="feature__tag">
                        <i className="far fa-star"></i>
                        <span>FEATURED</span>
                    </div>
                    <h1 className="title-white">
                        Rest In Warm Countries And Islands
                    </h1>
                    <p className="feature__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Labore pariatur officia voluptatibus repellendus.
                        Esse impedit molestias doloribus quidem corporis libero minus.
                    </p>
                    <button className="btn" type="submit">READ ARTICLE</button>
                </div>

                <div className="feature__stories">
                    <h3 className="title-sub-white">Featured <br /> Stories </h3>
                    <div className="feature__stores">
                        <div className="feature__store">
                            <img src="./img/user-1.jpg" alt="" />
                            <div className="feature__items">
                                <h2>Five Tips When Flying</h2>
                                <span>22 Dec 2020</span>
                            </div>
                        </div>
                        <hr />
                        <div className="feature__store">
                            <img src="./img/user-2.jpg" alt="" />
                            <div className="feature__items">
                                <h2>The Best Liners When Sailing</h2>
                                <span>22 Dec 2020</span>
                            </div>
                        </div>
                        <hr />
                        <div className="feature__store">
                            <img src="./img/user-3.jpg" alt="" />
                            <div className="feature__items">
                                <h2>Five Tips When Flying</h2>
                                <span>22 Dec 2020</span>
                            </div>
                        </div>
                        <hr />
                        <div className="feature__store">
                            <img src="./img/user-4.jpg" alt="" />
                            <div className="feature__items">
                                <h2>How To Avoid Visa Problem</h2>
                                <span>22 Dec 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;
