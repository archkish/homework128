import { Link } from "react-router-dom"

export default function HomeServices() {
  return (
    <section className="home__services" id="home__services">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">Services</div>
          <div className="info-name">My Photography Services</div>
        </div>
        <div className="header__btn">
            <Link to="services">View All Services &rarr;</Link>
        </div>
      </div>
      <div className="services">
        <div className="services-info">
          <div className="block">
            <div className="top">
              <div className="text">Events</div>
              <div className="top__btn">
                <button type="button">
                  <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
                    </svg>                  
                </button>
              </div>
            </div>
          </div>
          <div className="services-descr">
            Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
          </div>
          <div className="services-list">
            <div className="list-title">Service Highlights</div>
            <ul>
              <li><span>Coverage for weddings, parties, corporate functions, and more.</span></li>
              <li><span>Skilled photographers who know how to seize the moment.</span></li>
              <li><span>A mix of candid and posed shots for a comprehensive story.</span></li>
              <li><span>Quick turnaround for you to relive the day's highlights.</span></li>
            </ul>
          </div>

        </div>
        <div className="services-img">
          <img src="../assets/images/home-services.png" alt="services-main"/>
        </div>
      </div>

    </section>
  )
}