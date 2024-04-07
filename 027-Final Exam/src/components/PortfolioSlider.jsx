import { useEffect, useState, useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import PortfolioSliderItem from "./PortfolioSliderItem";

export default function PortfolioSlider() {

  const [slides, setSlides] = useState([])

  const fetchSlides = async ()=> {
    const response = await fetch('/data/dataSliderPortfolio.json');
    const json = await response.json();
    setSlides(json)
  }

  useEffect(()=>{
    fetchSlides()
  }, [])

  const slider = useRef(null);

  const settings = {
    className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 964,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return(
    <div className="slider-container">
      <div className="slides-wrapp">
        <button 
              className="slider-btn" 
              onClick={() => slider?.current?.slickPrev()}>
          <span className="left"></span>
        </button>
        <button 
              className="slider-btn" 
              onClick={() => slider?.current?.slickNext()}>
                <span className="right"></span>
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        {slides.map((slide, index) => <PortfolioSliderItem {...slide} key={index} slides={slides}/>)}
      </Slider>
    </div>
  )
}