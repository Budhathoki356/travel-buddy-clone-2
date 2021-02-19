import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, color: "#000000", position: "absolute", right: "48%", top: "380px" }}
                onClick={onClick}
            >
                <i className="fas fa-arrow-right"></i>
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, color: "#000000", position: "absolute", left: "48%", top: "380px" }}
                onClick={onClick}
            >
                <i className="fas fa-arrow-left"></i>
            </div>
        );
    }

    const settings = {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "30px"
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0",
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div>
            <Slider {...settings}>
                <div className="slider">
                    <div className="slide-item">
                        <img src="./img/photo-10.jpg" alt="" />
                        <div className="slide__content">
                            <i className="far fa-play-circle"></i>
                            <h3 className="title-sub-black">A Place Where We Can Enjoy</h3>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slide-item">
                        <img src="./img/photo-11.jpg" alt="" />
                        <div className="slide__content">
                            <i className="far fa-play-circle"></i>
                            <h3 className="title-sub-black">A Place Where We Can Enjoy</h3>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slide-item">
                        <img src="./img/photo-13.jpg" alt="" />
                        <div className="slide__content">
                            <i className="far fa-play-circle"></i>
                            <h3 className="title-sub-black">A Place Where We Can Enjoy</h3>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slide-item">
                        <img src="./img/photo-13.jpg" alt="" />
                        <div className="slide__content">
                            <i className="far fa-play-circle"></i>
                            <h3 className="title-sub-black">A Place Where We Can Enjoy</h3>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousal
