import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef(null);

  useEffect(() => {
    if(location.hash){
      lastHash.current = location.hash.split('#').pop(); 
      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          document
            .getElementById(lastHash.current)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      
      }
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [location]);

  return null;
}
