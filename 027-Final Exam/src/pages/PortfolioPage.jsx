import PortfolioBrands from "../components/PortfolioBrands";
import PortfolioGalery from "../components/PortfolioGalery";
import PortfolioHero from "../components/PortfolioHero";
import SiteReviews from "../components/SiteReviews";
import SiteFaqs from "../components/SiteFaqs"

export default function PortfolioPage() {
  return(
    <div className="container">
      <PortfolioHero/>
      <PortfolioBrands/>
      <PortfolioGalery/>
      <SiteFaqs/>
      <SiteReviews/>
    </div>
  )
}