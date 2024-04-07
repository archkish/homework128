
import PortfolioSlider from "./PortfolioSlider"


export default function HomePortfolio() {
  return(
    <section className="home__portfolio" id="home__portfolio">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">Portfolio</div>
          <div className="info-name">Explore My photography work</div>
        </div>
        <div className="btn-wrapp">
        </div>
      </div>
      <PortfolioSlider/>
    </section>
  )
}