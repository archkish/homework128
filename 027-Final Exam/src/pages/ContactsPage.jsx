import ContactsHero from "../components/ContactsHero";
import Contacts from "../components/ContactsContacts"
import SiteReviews from "../components/SiteReviews"

export default function ContactsPage() {
  return(
    <div className="container">
      <ContactsHero/>
      <Contacts/>
      <SiteReviews/>
    </div>
  )
}