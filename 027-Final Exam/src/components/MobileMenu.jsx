import { Link, NavLink} from "react-router-dom";


export default function MobileMenu({isOpen, clickHendler}) {
  return(
    <>
      <div className="mobile-menu" onClick={clickHendler}>
        <div className="mobile-menu__top">
          <div className="mobile-menu__logo">
            <a href="/">
              <img src="../assets/images/Damien.png" alt="logo"/>
            </a>
          </div>
          <div className="hamburger-wrap">
            <button id="hamburger_mobile" 
                    className={`hamburger hamburger--slider-r  ${isOpen ? 'is-active' : ''}`} 
                    type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <nav>
            <ul className="mobile_header_links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="about">About Me</NavLink></li>
              <li><NavLink to="portfolio">Portfolio</NavLink></li>
              <li><NavLink to="services">Services</NavLink></li>
            </ul>
            <div className="header__btn">
              <Link to="contacts">Contact Me</Link>
            </div>
        </nav>
      </div>
    </>
  )
}