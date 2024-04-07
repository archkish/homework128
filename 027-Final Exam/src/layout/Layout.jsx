import { Outlet } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import MobileMenu from '../components/MobileMenu'
import { useState } from 'react'
import ScrollToAnchor from '../components/ScrollToAnchor';

export default function Layout() {

  const [isOpen, setOpen] = useState();
  
  const clickHendler = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={` ${isOpen ? 'open-mobile-menu' : ''}`} >
      <div className="overlay" id="overlay" onClick={clickHendler}></div>
      <div className='page-wrap'>
        <SiteHeader isOpen={isOpen} clickHendler={clickHendler}/>
        <main>
          <Outlet/>
        </main>
        <ScrollToAnchor/>
        <SiteFooter/>
        <MobileMenu isOpen={isOpen} clickHendler={clickHendler}/>
      </div>
    </div>
  )
}