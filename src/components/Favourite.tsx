import React from 'react'
import Carousal from './Carousal'

const Favourite = () => {
    return (
        <div className="favourite">
            <div className="container">
                <div className="favourite__heading">
                    <h1 className="title-black">
                        Favourite Videos
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        libero fuga ipsam architecto repellendus laboriosam,
                        hic repellat accusantium consectetur.
                    </p>
                </div>
            </div>
            <div className="carousal">
                <Carousal />
            </div>

        </div>
    )
}

export default Favourite;