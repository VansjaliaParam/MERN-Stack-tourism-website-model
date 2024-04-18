import { Link } from 'react-router-dom';
import './home.css';
import Data from './packagedata.json';
import ImageSlider from './ImageSlider';
import australia from './2.jpg';
import bali from './4.jpg';
import maldives from './6.jpg';
import dubai from './9.jpg';

export default function Home(props) {


  const addToCart = (index)=>{
    let curProduct= Data[index];
    alert (curProduct.title+" has been added to the cart.");
    props.purchaseItem(curProduct);
  }

  const images = [
    { image: australia, text: 'Australia' },
    { image: bali, text: 'Bali' },
    { image: maldives, text: 'Maldives' },
    { image: dubai, text: 'Dubai' }
  ];

  return (
    <body className='homeBody'>
      <ImageSlider images={images} />
      <h1>Packages</h1>
        <div className="flex">
          {Data.map((d,i) => (
            <div key={i} className="card">
              <div className="image"><img src={d.url} alt={d.title} /></div>
              <div className="content">
                <span className="title">{d.title}</span>
                <br />
                <p className="desc">{d.description}</p>
                <Link className="action" to='/booknow' onClick={() => addToCart(i)}>
                  Book Now
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </body>
  );
}