import React, { useState } from 'react'
import { BottomNav } from '../../Components/BottomNav/BottomNav';
import { Assets } from '../../Components/Assets/Assets';
import './Coupon.css'


const Coupon = () => {

     const [currentScreen, setCurrentScreen] = useState("Coupon");
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);


      
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





        const couponOffer = [
          {
            id: 1,
            title: "28 5gal Bottles + Cooler",
            subtitle: "28 Coupons + Cool Dispenser",
            price: "420 AED",
            originalPrice: "425 AED",
            offerTag: "10 Bottles Free",
          },
          {
            id: 2,
            title: "15 5gal Bottles + Cooler",
            subtitle: "15 Coupons + Cool Dispenser",
            price: "250 AED",
            originalPrice: "270 AED",
            offerTag: "5 Bottles Free",
          },
          {
            id: 3,
            title: "10 5gal Bottles Only",
            subtitle: "10 Coupons Without Dispenser",
            price: "150 AED",
            originalPrice: "160 AED",
            offerTag: "2 Bottles Free",
          },
          {
            id: 4,
            title: "10 5gal Bottles Only",
            subtitle: "10 Coupons Without Dispenser",
            price: "150 AED",
            originalPrice: "160 AED",
            offerTag: "2 Bottles Free",
          },
        ];
        
      



  return (
    <div className="coupon-container">
      <div className="coupon-head">
        <h1>Coupons</h1>
      </div>
      <p>
        Using coupons, you will be able to pay and receive our products at the
        lowest possible price.
      </p>
      <div className="cpn-container">
        {couponData.map((coupon, index) => (
          <div className="coupons-cards" key={index}>
            <div className="coupons-card">
              <img className="offer-gif" src={Assets.offerGif} alt="Offer" />
              <img
                className="coupon-dispencer"
                src={coupon.cpnImg}
                alt="Coupon Dispenser"
              />
              <h2>{coupon.price}</h2>
            </div>
            <div className="coupons-title">
              <h1>{coupon.title}</h1>
              <h2>Add-Ons</h2>
              {coupon.details.map((detail, i) => (
                <h3 key={i}>{detail}</h3>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="coupon-ticket-container">
        {couponOffer.map((coupon) => (
          <div
            key={coupon.id}
            className="single-coupon"
            style={{
              backgroundImage: `url(${Assets.couponBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="coupon-data">
              <h1>Coupon</h1>
              <h2>{coupon.title}</h2>
              <h3>{coupon.subtitle}</h3>
              <button>Buy Now</button>
            </div>
            <div className="coupon-price">
              <h1>{coupon.price}</h1>
              <h3>{coupon.originalPrice}</h3>
            </div>
            <h3 className="free-tag">{coupon.offerTag}</h3>
          </div>
        ))}
      </div>

      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
}

export default Coupon
