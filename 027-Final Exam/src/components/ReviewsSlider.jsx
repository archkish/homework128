import { useEffect, useState, useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import ReviewsItem from "./ReviewsItem";

export default function() {
  const [tiles, setTiles] = useState([])

  const fetchTiles = async ()=> {
    const response = await fetch('/data/dataReviews.json');
    const json = await response.json();
    setTiles(json)
  }

  useEffect(()=>{
    fetchTiles()
  }, [])

  const slider = useRef(null);

  const settings = {
    className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1315,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <div className="review-container">
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
        {tiles.map((tile, index) => <ReviewsItem {...tile} key={index}/>)}
      </Slider>
    </div>

  )
}