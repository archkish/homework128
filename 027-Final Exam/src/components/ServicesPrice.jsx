
import ServicesBottomBlock from "./ServicesBottomBlock";
import ServicesTopBlock from "./ServicesTopBlock";

export default function ServicesPrice() {

  const fetchUrl = '/data/pricesPortrait.json'; 
  const fetchUrl2 = '/data/pricesEvents.json'; 
  const fetchUrl3= '/data/pricesComercial.json'; 

  const fetchUrlPortrait = '/data/dataServicesSlides.json'; 
  const fetchUrlEvents = '/data/dataEventsSlides.json'; 
  const fetchUrlComerc = '/data/dataComercialSlides.json'; 

  return(
    <section className="services__price" id="services__price" >
      <div className="show">
        <div id="portrait">
          <ServicesTopBlock 
                link={"/portfolio#tile_portraits"}
                fetchUrl={fetchUrlPortrait}
                title={"Portrait Photography"} 
                descr={"Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story."}
          />
          <ServicesBottomBlock fetchUrl={fetchUrl}/>
        </div>
        
        <div id="events">
          <ServicesTopBlock
                link={"/portfolio#tile_events"}
                fetchUrl={fetchUrlEvents} 
                title={"Events Photography"} 
                descr={"Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."}
          />
          <ServicesBottomBlock fetchUrl={fetchUrl2}/>
        </div>
        
        <div id="commercial">
          <ServicesTopBlock 
                link={"/portfolio#tile_commerc"}
                fetchUrl={fetchUrlComerc} 
                title={"Commercial Photography"} 
                descr={"In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience."}
          />
          <ServicesBottomBlock fetchUrl={fetchUrl3}/>
        </div>
        
      </div>
    </section>
  )
}