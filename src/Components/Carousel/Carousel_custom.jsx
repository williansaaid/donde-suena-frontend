import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselCustom = () => {
    const images = [
        "fly fly.jpg",

        "wos.jpg",
        "eruca flyer.jpg",
        "artics flyer.jpg",
    ];
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showIndicators={true}
            infiniteLoop={true}
            showStatus={false}
        >
            {images &&
                images.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <img
                                src={require(`../../assets/img/${el}`)}
                                alt={el}
                            />
                        </div>
                    );
                })}
        </Carousel>
    );
};

export default CarouselCustom;
