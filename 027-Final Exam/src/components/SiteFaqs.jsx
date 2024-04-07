import AccordionItem from "./AccordionItem"
import SiteAccordion from "./SiteAccordion"

export default function SiteFaqs() {
  return(
    <section className="faqs" id="faqs">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">FAQ’s</div>
          <div className="info-name">Frequently Asked Questions</div>
        </div>
      </div>
      <SiteAccordion/>
    </section>
  )
}