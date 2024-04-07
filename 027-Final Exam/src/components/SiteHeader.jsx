import { Link, NavLink} from "react-router-dom";
// import { useState } from "react";
// import MobileMenu from "./MobileMenu";

export default function SiteHeader({isOpen, clickHendler}) {
  // const [isOpen, setOpen] = useState();

  // const clickHendler = () => {
  //   setOpen(!isOpen)
  // }

  return(
    <header className="header">
      <div className="container">      
        <div className="header-wrapp">
          <div className="logo">
            <Link to="/">
              <img src="../assets/images/Damien.png" alt="logo"/>
            </Link>
          </div>
          <nav className="main-menu">
            <ul>
              <li><NavLink className="link" to="/">Home</NavLink></li>
              <li><NavLink className="link"  to="about">About Me</NavLink></li>
              <li><NavLink className="link" to="portfolio">Portfolio</NavLink></li>
              <li><NavLink className="link" to="services">Services</NavLink></li>
            </ul>
          </nav>
          <div className="hamburger-wrapper">
            <button 

                  onClick={clickHendler} 
                  id="hamburger_main" 
                  className={`hamburger hamburger--slider-r ${isOpen ? 'is-active' : ''}`} 
                  type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <div className="header__btn">
            <Link to="contacts">Contact Me</Link>
          </div>
        </div>
      </div>
      {/* <MobileMenu isOpen={isOpen} clickHendler={clickHendler}/> */}
    </header>
  )
}