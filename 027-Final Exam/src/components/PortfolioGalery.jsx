import Galery from "./Galery"
export default function PortfolioGalery() {
  const fetchUrlPortrait = '/data/dataServicesSlides.json'; 
  const fetchUrlEvents = '/data/dataEventsSlides.json'; 
  const fetchUrlComerc = '/data/dataComercialSlides.json'; 

  return(
    <section className="portfolio__galery" id="portfolio__galery">
        <div className="portfolio-tile" id="tile_portraits">
          <div className="galery__title">Portraits Photography</div>
          <div className="portfolio-block">
            <Galery fetchUrl={fetchUrlPortrait}/>
          </div>
        </div>
        <div className="portfolio-tile" id="tile_events">
          <div className="galery__title">Events Photography</div>
          <div className="portfolio-block">
            <Galery fetchUrl={fetchUrlEvents}/>
          </div>
        </div>
        <div className="portfolio-tile" id="tile_commerc">
          <div className="galery__title">Commercial Photography</div>
          <div className="portfolio-block">
            <Galery fetchUrl={fetchUrlComerc}/>
          </div>
        </div>
    </section>
  )
}