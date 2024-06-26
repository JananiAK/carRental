
import React from 'react';
import {Container} from 'reactstrap';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import "../../Styles/MainSlider.css";

const MainSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 2500,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };

  return (
    <Slider {...settings} className="main__slider">
    <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/vehicle">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/Vehicle">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      
    
    
  </Slider>
   
    );
};

export default MainSlider;
