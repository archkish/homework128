import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useEffect, useState } from "react";

export default function MyGallery({fetchUrl}) {
  const [fotos, setFotos] = useState([])
  const fetchFotos = async ()=> {
    const response = await fetch(fetchUrl);
    const json = await response.json();
    setFotos(json)
  }

  useEffect(()=>{
    fetchFotos(fetchUrl)
  }, [])

  return (
    <Gallery>
      {fotos.map((foto, index) => (
        <Item
          key={index}
          original={foto.image}
          width="500"
          height="300"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={foto.image} />
          )}
         
        </Item>
        
      ))}
    </Gallery> 
  )
}