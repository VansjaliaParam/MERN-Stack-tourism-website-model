import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image.image} alt={`Slide ${index + 1}`} />
            <div className="slider-text">
              <h1 style={{ fontFamily: 'Helvetica', fontSize: '24px', color: 'white', textAlign: 'center' }}>{image.text}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
