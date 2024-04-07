// import ReviewsItem from "./ReviewsItem"
// import { useState, useEffect} from "react"
import ReviewsSlider from "./ReviewsSlider";

export default function SiteReviews() {

  // const [tiles, setTiles] = useState([])

  // const fetchTiles = async ()=> {
  //   const response = await fetch('/data/dataReviews.json');
  //   const json = await response.json();
  //   setTiles(json)
  // }

  // useEffect(()=>{
  //   fetchTiles()
  // }, [])

  return(
    <section className="reviews" id="reviews">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">Testimonials</div>
          <div className="info-name">What My Clients Say</div>
        </div>
        {/* <div className="rev-top-btn"> */}
          {/* <button type="button"><span className="left"></span></button>
          <button type="button"><span className="right"></span></button> */}
        {/* </div> */}
      </div>
      <ReviewsSlider/>
    </section>
  )
}