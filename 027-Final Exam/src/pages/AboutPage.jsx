import AboutHero from "../components/AboutHero";
import AboutJorney from "../components/AboutJorney";
import SiteReviews from "../components/SiteReviews";

export default function AboutPage() {
  return(
    <div className="container">
      <AboutHero/>
      <AboutJorney/>
      <SiteReviews/>
    </div>
  )
}