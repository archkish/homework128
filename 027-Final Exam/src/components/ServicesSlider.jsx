import { useEffect, useState, useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import ServiceItem from "./ServicesItem";

export default function({fetchUrl}) {
  const [imgs, setImg] = useState([])

  const fetchImg = async ()=> {
    const response = await fetch(fetchUrl);
    const json = await response.json();
    console.log(json)
    setImg(json)
  }
  useEffect(()=>{
    fetchImg(fetchUrl)
  }, [])

  const sliderServ = useRef(null);

  const settings = {
    className: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: false,
  }

  return (
    <div className="wrap-slider">
        <div class="block-slider">
          <Slider ref={sliderServ} {...settings}>
            {imgs.map((img, index) => <ServiceItem {...img} key={index}/>)}
          </Slider>
        </div>
      <div className="slides-wrapp">
        <button 
              className="slider-btn" 
              onClick={() => sliderServ?.current?.slickPrev()}
          >

          <span className="left"></span>
        </button>
        <button 
              className="slider-btn" 
              onClick={() => sliderServ?.current?.slickNext()}>
                <span className="right"></span>
        </button>
      </div>

    </div>

  )
}