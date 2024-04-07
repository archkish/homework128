
import { useParams, useLocation, Link } from 'react-router-dom';
import Galery from "../components/Galery"

export default function DetailPhotoPage() {
  const location = useLocation();
  let { id } = useParams();
  const slides = location.state?.slides;

  const product = slides?.find((slide) => slide.id === id);
  
    if (typeof product === 'undefined') {
      return <div>Товар не знайдено</div>;
    }

    return (
      <div className='container'>
        <div className="detail">
        <h2 className="detail-title">{product.title}</h2>
        <p className='detail-date'>{product.date}</p>
        <Link to="/#home__portfolio" className='detail-home'>Back to works</Link>
        <div className='detail-wrapp'>
          <Galery fetchUrl={product.fotos}/>
          </div>
        </div>
      </div>
    );
}