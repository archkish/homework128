import JourneyTile from "./JorneyTile";
import { useEffect, useState} from "react";

export default function AboutJorney() {

  const [tiles, setTiles] = useState([])

  const fetchTiles = async ()=> {
    const response = await fetch('/data/journeyInfo.json');
    const json = await response.json();
    setTiles(json)
  }

  useEffect(()=>{
    fetchTiles()
  }, [])

  return(
    <section className="about__journey" id="about__journey">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">Journey</div>
          <div className="info-name">Damien's Journey - A Timeline</div>
        </div>
      </div>
      <div className="journey__tiles">
        {tiles.map((tile, index) => <JourneyTile {...tile} key={index}/>)}
      </div>
    </section>
  )
}