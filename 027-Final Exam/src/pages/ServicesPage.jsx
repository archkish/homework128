import ServicesHero from "../components/ServicesHero";
import ServicesPrice from "../components/ServicesPrice";
import SiteFaqs from "../components/SiteFaqs";

export default function ServicesPage() {
  return(
    <div className="container">
      <ServicesHero/>
      <ServicesPrice/>
      <SiteFaqs/>
    </div>
  )
}