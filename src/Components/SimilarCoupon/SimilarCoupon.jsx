import React, { useState } from 'react';
import './SimilarCoupon.css';
import { Assets } from '../Assets/Assets';

const SimilarCoupon = () => {
  // Array of similar coupons
  const similarCoupons = [
    {
      id: 1,
      image: Assets.similar_coupon, 
      offer: '10 Gallon Free',
      title: '28 bottle + Cooler',
      description: '28 Coupons + Hot & Cool dispenser',
      price: '360 AED',
      originalPrice: '425 AED'
    },
    {
      id: 2,
      image: Assets.similar_coupon, 
      offer: '5 Gallon Free',
      title: '15 bottle + Cooler',
      description: '15 Coupons + Hot & Cool dispenser',
      price: '250 AED',
      originalPrice: '300 AED'
    },
    {
      id: 3,
      image: Assets.similar_coupon, 
      offer: '2 Gallon Free',
      title: '10 bottle + Cooler',
      description: '10 Coupons + Hot & Cool dispenser',
      price: '180 AED',
      originalPrice: '220 AED'
    }
  ];



  const [cartAdded, setCartAdded] = useState(false);

  const handleCartClick = () => {
    setCartAdded(true);
  };



  return (
    <div className="similarCpn-wrap">
      <div className="similarCpn-heading">
        <span></span>
        <h1>Similar Coupons</h1>
        <span></span>
      </div>
      
      <div className='similarCpn-data'>
        {similarCoupons.map((coupon) => (
          <div key={coupon.id} className="similarCpn-item">
            <div className="similarCpn-img">
              <img src={coupon.image} alt="coupon" />
            </div>
            <div className='similarCpn-price'>
              <h3 className='offer-text'>{coupon.offer}</h3>
              <h3>{coupon.title}</h3>
              <h2>{coupon.description}</h2>
              <div className='price-head'>
                <h1>{coupon.price}</h1>
                <h3>{coupon.originalPrice}</h3>
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className='similarCpn-buttons'>
        <button className='cart-button' onClick={handleCartClick}>
        {cartAdded ? 'Go to Cart' : 'Add to Cart'}
          
          </button>
        <button className='buy-now'>Buy Now</button>
      </div>
    </div>
  );
}

export default SimilarCoupon;
