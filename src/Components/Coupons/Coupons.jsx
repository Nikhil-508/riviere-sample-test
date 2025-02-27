import React from 'react'
import './Coupons.css'
import { Assets } from '../Assets/Assets';

const Coupons = () => {

  const couponData = [
    { 
      price: "420 AED", 
      title: "Buy 60 Five Gallon Bottle", 
      details: ["10 FIVE GALLON +", "COOLER FREE"], 
      cpnImg: Assets.coupondispencer 
    },
    { 
      price: "350 AED", 
      title: "Buy 50 Five Gallon Bottle", 
      details: ["8 FIVE GALLON +", "COOLER FREE"], 
      cpnImg: Assets.couponGallon 
    },
    { 
      price: "500 AED", 
      title: "Buy 70 Five Gallon Bottle", 
      details: ["15 FIVE GALLON +", "COOLER FREE"], 
      cpnImg: Assets.coupondispencer 
    },
  ];






  return (
    <div className="coupons-wrap">
    <div className="coupons-heading">
      <span></span>
      <h1>Coupons</h1>
      <span></span>
    </div>
    <div className="cpn-container">
      {couponData.map((coupon, index) => (
        <div className="coupons-cards" key={index}>
          <div className="coupons-card">
            <img className='offer-gif' src={Assets.offerGif} alt="Offer" />
            <img className='coupon-dispencer' src={coupon.cpnImg} alt="Coupon Dispenser" />
            <h2>{coupon.price}</h2>
          </div>
          <div className='coupons-title'>
            <h1>{coupon.title}</h1>
            <h2>Add-Ons</h2>
            {coupon.details.map((detail, i) => (
              <h3 key={i}>{detail}</h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Coupons
