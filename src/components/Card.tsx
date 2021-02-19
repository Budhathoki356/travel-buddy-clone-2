import React from 'react'
import Form from './Form'

const Card = () => {
    return (
        <div className="card">
            <div className="container">
                <div className="card__inner" style={{ backgroundImage: "url(/img/photo-2.jpg)" }}>
                    <div className="card__inner--content">
                        <h1 className="title-white">Sign Up To Our Newsletter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa aliquid explicabo eligendi, esse provident architecto commodi. Amet quidem corrupti veniam esse beatae, nostrum facilis
                        magni consectetur incidunt error aspernatur distinctio.
                    </p>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Card
