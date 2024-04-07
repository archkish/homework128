export default function PortfolioBrands() {
  return(
    <section className="portfolio__brands" id="portfolio__brands">
      <div className="brands__title">
        Brands i have worked with
      </div>
      <div className="line p-line">
        <div className="items-wrap">
          <div className="items marquee">
            <div className="item"><img src="../assets/images/logo-1.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-2.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-3.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-4.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-5.png" alt="brand"/></div>
          </div>
          <div aria-hidden="true" className="items marquee">
            <div className="item"><img src="../assets/images/logo-1.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-2.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-3.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-4.png" alt="brand"/></div>
            <div className="item"><img src="../assets/images/logo-5.png" alt="brand"/></div>
          </div>
        </div>
      </div>
    </section>
  )
}