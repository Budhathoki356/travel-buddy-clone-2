import React from 'react'

const Article = () => {
    return (
        <div className="article">
            <div className="container">
                <div className="article__inner">
                    <div className="article__title">
                        <h1 className="title-black"> Travel Is <br /> Worth Your Time</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Natus sequi enim provident aspernatur officia odit nesciunt aliquid, voluptatem laborum. Cupiditate sequi
                            repudiandae maxime quasi veritatis optio in fugit eius officia.
                    </p>
                        <button className="btn" type="submit">READ ARTICLE</button>
                    </div>
                    <div className="article__images">
                        <div className="image img1">
                            <img src="./img/photo-3.jpg" alt="" />
                        </div>
                        <div className="image imig2">
                            <img src="./img/photo-5.jpg" alt="" />
                        </div>
                        <div className="image img3">
                            <img src="./img/photo-6.jpg" alt="" />
                        </div>
                        <div className="image img4">
                            <img src="./img/photo-7.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
