
import HomeHero from "../components/HomeHero"
import HomeAbout from "../components/HomeAbout"
import HomeServices from "../components/HomeServices"
import HomePortfolio from "../components/HomePortfolio"
import SiteFaqs from "../components/SiteFaqs"
import SiteReviews from "../components/SiteReviews"
import Modal from "../components/Modal"
import { useState } from "react"

export default function HomePage() {

  const[isShow, setIsShow] = useState(false)

  return(
      <div className="container">
        {/* <HomeHero onOpen={() => {setIsShow(true)}}/>  */}
        <HomeHero/> 
        <Modal isShow={isShow} onClose={() => {setIsShow(false)}}/>
        <HomeAbout/> 
        <HomeServices/>
        <HomePortfolio/>
        <SiteFaqs/>
        <SiteReviews/>
      </div>
  )
}