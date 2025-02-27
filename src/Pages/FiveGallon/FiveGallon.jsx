import React from "react";
import "./FiveGallon.css";
import { Assets } from "../../Components/Assets/Assets";

const FiveGallon = () => {


  const couponData = [
    {
      price: "420 AED",
      title: "Buy 60 Five Gallon Bottle",
      details: ["10 FIVE GALLON +", "COOLER FREE"],
      cpnImg: Assets.coupondispencer,
    },
    {
      price: "350 AED",
      title: "Buy 50 Five Gallon Bottle",
      details: ["8 FIVE GALLON +", "COOLER FREE"],
      cpnImg: Assets.couponGallon,
    },
    {
      price: "500 AED",
      title: "Buy 70 Five Gallon Bottle",
      details: ["15 FIVE GALLON +", "COOLER FREE"],
      cpnImg: Assets.coupondispencer,
    },
  ];

  

  return (
    <div className="fiveGallon-container">
      <div className="fiveGallon-head">
        <img src={Assets.backArrow} alt="" />
        <h1>Five Gallon Bottle</h1>
      </div>
      <div className="fiveGallon-banner">
        <img src={Assets.fiveGallonBanner} alt="" />
        <button>Order Now</button>
      </div>
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
    </div>
  );
};

export default FiveGallon;
