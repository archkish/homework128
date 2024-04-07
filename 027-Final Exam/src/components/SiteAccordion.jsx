
import { useEffect, useState} from "react";
import AccordionItem from "./AccordionItem"


export default function SiteAccordion() {

  const [items, setItems] = useState([])
  const [active, setActive] = useState('')

  const fetchItems = async ()=> {
    const response = await fetch('/data/dataFaqs.json');
    const json = await response.json();
    setItems(json)
  }

  useEffect(()=>{
    fetchItems()
  }, [])

  return (
    <div className="accordion">
      {items.map((item, index) => 
        <AccordionItem {...item} key={index} active={active} setActive={setActive}/>)}
    </div>
  )
}






